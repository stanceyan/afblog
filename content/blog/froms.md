---
author: Alofonksyone
title: Bootstrap elements
date: 2023-08-12
lastmod: 2024-01-15
description: Use.
tags:
  - bootstrap
  - shortcode
thumbnail:
  url: img/boots.jpg
  author: Nathan Dumlao
  authorURL: https://unsplash.com/@nate_dumlao
  origin: Unsplash
  originURL: https://unsplash.com/photos/QLPWQvHvmII
draft: true
---

Hinode provides several shortcodes that wrap common Bootstrap components. Refer to the [official documentation] for more details.

## Introduction

{{< alert type="info" >}}
The commands and code examples within this guide are written with macOS in mind. The commands should be transferrable to Windows and Linux too.
{{< /alert >}}

Hinode uses {{< link href="https://google.com" >}}Hugo{{< /link >}}, a popular open-source generator, to generate a static website. Static websites do not require a database and can be [hosted virtually anywhere]. In this guide, we will set up a new site using a template from GitHub. We will then edit our Markdown content with Visual Studio Code (VSCode). Lastly, we will submit our changes to the main branch.

This guide requires a GitHub account to host the remote demo repository. Next, Git, Node.js and npm are required for local development and testing. The guide also uses VSCode to edit the content. Click on each of the following links to sign up and install the required software as necessary. The software packages should be compatible with Windows, macOS, and most Linux distributions.

## Step 1 - Initializing the project

As first step we will create a new repository on GitHub using a template. The template uses npm to automate several tasks. We will then connect our local machine to the remote repository and install the required dependencies. Lastly, we will run a local development server to test the newly created site.

### Creating a new Git repository

Hinode comes in two flavors: