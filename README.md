# graphql_cms_blog_app

## Description

A custom blog app with a content management system which allows you to easily create, maintain and publish blog posts including comments and more.

## Key technologies

- Node 14.17.3 && NPM 6.14.13
- React.js
- Next.js
- GraphQL
- GraphCMS
- Tailwind CSS

## Project Setup

1. Go to www.graphcms.com to create an account for free
2. Create a new 'blank' project
3. Input project name and description then select region
4. Start creating your schema

5. Create an 'Author' model and give it a display name 'Author', an API ID 'Author' and Plural API ID 'Authors' then add the following fields:

- Name as a Single line text, Display name 'Name', API ID 'name' and field options 'Use as title field' then validations 'Required' and create.
- Photo as an Asset picker, Display name 'Photo', API ID 'photo' and create.
- Bio as a multi line text, Display name 'Bio', API ID 'bio' and create.
- Post as a Reference, Allow only one model to be referenced, Post as Model to reference, Two-way reference as reference directions

6. Create 'Categories' model and give it a display name 'Category', an API ID 'Category' and Plural API ID 'Categories' then add the following fields:

- Name as a Single line text, Display name 'Name', API ID 'name' and field options 'Use as title field' then validations 'Required' and 'Unique' and create.
- Slug as a Slug, Display name 'Slug', API ID 'slug', slug options 'Lowercase', validations 'required', 'unique', 'match specific pattern dropdown 'Slug' and create.
- Post as a Reference, Allow only one model to be referenced, Post as Model to reference, Two-way reference as reference directions, Allow multiple Categories per Post, Allow multiple Posts per Category

7. Create 'Comment' model and give it a display name 'Comment', an API ID 'Comment' and Plural API ID 'Comments' then add the following fields:

- Name as a Single line text, Display name 'Name', API ID 'name' and field options 'Use as title field' then validations 'Required' and create.
- Email as a Single line text, Display name 'Email', API ID 'email' then validations 'Required' and create.
- Comment as a multi line text, Display name 'Comment', API ID 'comment' and then validations 'Required' and create.
- Post as a Reference, Allow only one model to be referenced, Post as Model to reference, Two-way reference as reference directions, Allow multiple Comments per Post then create

8. Create 'Post' model and give it a display name 'Post', an API ID 'Post' and Plural API ID 'Posts' then add the following fields:

- Title as a Single line text, Display name 'Title', API ID 'title' and field options 'Use as title field' then validations 'Required' and create.
- Slug as a Slug, Display name 'Slug', API ID 'slug', slug options 'Lowercase', validations 'required', 'unique' and create.
- Excerpt as multi line text, Display name 'Excerpt', API ID 'excerpt' validations 'required' and create.
- Content as rich text, Display name 'Content', API ID 'content', Enable embedding for Post, validations 'required' and create.
- Featured Image as an asset, Display name 'Featured Image', API ID 'featuredImage', validations 'required' and create.
- Author as a Reference, Display name 'Author', API ID 'author', Allow only one model to be referenced, Author as Model to reference, Two-way reference as reference directions, Allow multiple Posts per Author then create.
- Categories as a Reference, Display name 'Categories', API ID 'categories', Allow only one model to be referenced, Category as Model to reference, Two-way reference as reference directions, Allow multiple Posts per Category, Allow multiple Categories per Post and create.
- Comments as a Reference, Display name 'Comments', API ID 'comments', Allow only one model to be referenced, Comment as Model to reference, Two-way reference as reference directions, Allow multiple Comments per Post and create.

9. Create a post

- Navigate to 'Content' icon, click 'Create item', complete the fields and publish your new post!

10. Create permissions

- Navigate to 'Project Settings' then 'API Access', Create permissions by toggling the 'Read' all models and publish
- Then click 'create token', give it a name, enable all models (see screenshot below)

11. Alright, you're ready for installation.

## Installation

1. Fork or clone this repository
2. `cd graphql_cms_blog_app`
3. `npm install`
4. Create new file for environment variables `touch .env`

```
// grab the Content API endpoint URL
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=

// grab the Permanent Auth Tokens value
GRAPHCMS_TOKEN=
```

5. `npm run dev`
6. http://localhost:3000/
