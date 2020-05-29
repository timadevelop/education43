#!/bin/bash
set -e

log() {
  printf "\n$1\n"
}

back_to_master() {
  log "Going back to master branch..." &&
  git checkout master &&
  log "Deleting tmp branch..." &&
  git branch -D tmp-release
}

cancel() {
  log "Some error occurred... cancelling the release process"
  back_to_master
}

release() {
  log "Deleting old branch..."
  git branch -D tmp-release
  log "Checking out to a new tmp-release branch..." &&
  git checkout -b tmp-release &&
  log "Merging with master..." &&
  git merge --no-edit master &&
  log "Unignoring dist folder..." &&
  sed -i '/dist/d' ./.gitignore &&
  log "Deleting the index.original.html..." &&
  echo 'index.original.html' >> ./.gitignore &&
  log "git add..." &&
  git add . &&
  log "commit..." &&
  git commit -m "Edit .gitignore to release" &&
  log "Deleting old release-to-gh-pages split branch..." &&
  (git branch -D release-to-gh-pages &>/dev/null || true) &&
  log "Subtree split ..." &&
  git subtree split --prefix dist/education/browser/ -b release-to-gh-pages &&
  log "Pushing to gh-pages..." &&
  git push origin release-to-gh-pages:gh-pages --force
}

(release && back_to_master) || cancel
