# 🎓 Education43 - a community-driven list of free educational resources.

See [education43.teemofeev.com](https://education43.teemofeev.com/)

I've got my degree in for free and I hate seeing people suffer due to their student loans. While people are yelling and protesting, I would like to provide another approach to the situation. This page contains thousands of links to books, courses, and other resources.

I believe these can help you not only to get your knowledge for free, but also do it more effectively by leaving old education methods aside. Using these resources any person can outperform any 'prestigious' university student.

## ✍️ Contribute

You can find content source code in [./src/resources/content/](./src/resources/content/).

Each file in `content` folder represents a specific academic field, which contains a markdown with urls.

- If you want to modify a specific field you can simply change one of the markdown files in [./src/resources/content/](./src/resources/content/) directory and open a new PR.

- If you don't want to edit files you can use [Github Issues & Pull Requests](https://github.com/timadevelop/education43/issues) to suggest new resources/ideas or email me at <a href="mailto:teemofeev.education43@gmail.com">teemofeev.education43@gmail.com</a>.

- In order to add a new field you can copy `content/template.md` to `content/<field name>.md` and modify the [./src/app/list/tags.ts](./src/app/list/tags.ts):

```diff
+  {
+    title: '<field name>',
+    color: '#4b4b4b'
+  },
```


## ☀️ Have a nice day
