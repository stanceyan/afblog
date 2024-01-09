---
author: Alofonksyone
title: Bootstrap elements
date: 2023-08-12
description: Use shortcodes to add common Bootstrap elements with ease.
tags: ["bootstrap", "shortcode"]
thumbnail:
  url: img/boots.jpg
  author: Nathan Dumlao
  authorURL: https://unsplash.com/@nate_dumlao
  origin: Unsplash
  originURL: https://unsplash.com/photos/QLPWQvHvmII
---

Hinode provides several shortcodes that wrap common Bootstrap components. Refer to the [official documentation] for more details.


## Accordion

{{< accordion >}}
  {{< accordion-item header="Accordion Item #1" show="true" >}}
    This is the first item's accordion body. It supports HTML content, if enabled in the goldmark
    renderer. The item is shown by adding the value `show` to the `class` argument.
  {{< /accordion-item >}}
  {{< accordion-item header="Accordion Item #2" >}}
    This is the second item's accordion body.
  {{< /accordion-item >}}
  {{< accordion-item header="Accordion Item #3" >}}
    This is the third item's accordion body.
  {{< /accordion-item >}}
{{< /accordion >}}


## Alert

{{< alert color="danger" dismissible="true" >}}
    A simple danger alert—check it out!
{{< /alert >}}


## Badge

Heading 1 {{< badge title="New" >}}
{.h1}
Heading 2 {{< badge title="New" >}}
{.h2}
Heading 3 {{< badge title="New" >}}
{.h3}
Heading 4 {{< badge title="New" >}}
{.h4}
Heading 5 {{< badge title="New" >}}
{.h5}
Heading 6 {{< badge title="New" >}}
{.h6}


## Breadcrumb

{{< breadcrumb path="blog" >}}


## Button

{{< button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" badge="99+" >}}
    Inbox
{{< /button >}}


## Button group

{{< button-group aria-label="Basic example" >}}
  {{< button color="primary" href="#!" >}}Left{{< /button >}}
  {{< button color="primary" href="#!" >}}Middle{{< /button >}}
  {{< button color="primary" href="#!" >}}Right{{< /button >}}
{{< /button-group >}}


## Card

{{< card path="about" padding="3" class="col-6 mx-auto" color="body-tertiary" header="publication" footer="none" />}}


## Card group

{{< card-group padding="3" gutter="3" >}}
    {{< card title="Bootstrap framework" icon="fab bootstrap" >}}
        Build fast, responsive sites with Bootstrap 5. Easily customize your site with the source
        Sass files.
    {{< /card >}}
    {{< card title="Full text search" icon="fas magnifying-glass" >}}
        Search your site with FlexSearch, a full-text search library with zero dependencies.
    {{< /card >}}
    {{< card title="Development tools" icon="fas code" >}}
        Use Node Package Manager to automate the build process and to keep track of dependencies.
    {{< /card >}}
{{< /card-group >}}


## Carousel 

{{< carousel ratio="16x9" class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/coffee.jpg" caption="slide 1" >}}
  {{< img src="img/phone.jpg" caption="slide 2" >}}
  {{< img src="img/dunes.jpg" caption="slide 3" >}}
{{< /carousel >}}


## Collapse

{{< button collapse="collapse-1" >}}
    Trigger panel
{{< /button >}}
{{< collapse id="collapse-1" class="p-3 border rounded bg-primary-subtle" >}}
    Some placeholder content for the collapse component. This panel is *hidden by default* but
    revealed when the user activates the relevant trigger.
{{< /collapse >}}


## Icon

{{< fa square-check >}}
{{< fab linkedin >}}
{{< fas circle-check >}}
{{< fab facebook >}}
{{< fab twitter >}}
{{< fab instagram >}}
{{< fab tiktok >}}
{{< fab github >}}
{{< fab twitch >}}
{{< fab whatsapp >}}

## Image

{{< image src="img/flowers.jpg" ratio="21x9" caption="Figure caption" class="rounded" >}}

{{< image src="/img/logo_icon.svg" class="col-sm-6 col-lg-4" wrapper="text-center" >}}

{{< image src="/img/logo_var.svg#logo" class="col-sm-6 col-lg-4" wrapper="text-center" >}}


## Link

- {{< link hinode >}}Named link with default settings{{< /link >}}
- {{< link name=hinode cue=false tab=false >}}Named link opening in current tab w/o icon{{< /link >}}
- {{< link name=hinode cue=true tab=true >}}Named link opening in new tab with icon{{< /link >}}
- {{< link hinode />}}
- {{< link href="https://developer.mozilla.org" >}}External link{{< /link >}}
- {{< link "./projects/another-project" >}}Internal link with title{{< /link >}}
- {{< link url="projects/another-project" />}}
- {{< link url="/projects/another-project" />}}
- {{< link url="../projects/another-project" case=false />}}
- {{< link "about" />}}
- {{< link "/blog" />}}
- {{< link "/blog" >}}About (French){{< /link >}}
- {{< link "#image" />}}
- {{< link "components/#map" />}}


## Mark

Use the mark shortcode to {{< mark >}}highlight{{< /mark >}} specific text.


## Nav

  {{< nav type="pills" vertical="true" >}}
    {{< nav-item header="Nav Item #1" show="true" >}}
      This is the first item's nav body. It supports HTML content, if enabled in the goldmark
      renderer. The item is shown by adding the value `show` to the `class` argument.
    {{< /nav-item >}}
    {{< nav-item header="Nav Item #2" >}}
      This is the second item's nav body.
    {{< /nav-item >}}
    {{< nav-item header="Nav Item #3" >}}
      This is the third item's nav body.
    {{< /nav-item >}}
  {{< /nav >}}


## Navbar

{{< navbar id="navbar-sample" path="blog" color="primary" size="md" search="false" menus="sample" title="Brand" mode="false" >}}


## Persona

{{< persona thumbnail="/img/creator-1x1.jpg" title="Creators" color="primary" >}}
  As a content creator you value your independence. You like to take control of your
  online and offline presence. You want to focus on growing your audience, without
  limitations.
  Hinode gives you the tools to publish your blog in the way that you want. You have
  full ownership and control of your content. That is why content creators choose
  Hinode.
{{< /persona >}}


## Realease

{{< release version="v0.14.1" >}}


## Spinner

{{< spinner color="info" class="text-center" >}}
Loading...
{{< /spinner >}}


## Table

{{< table >}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
| 2. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
| 3. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
{{< /table >}}


## Timeline

## Toast

{{< button toast="toast-example-1" >}}
    Show toast 1
{{< /button >}}
{{< button toast="toast-example-2" >}}
    Show toast 2
{{< /button >}}
{{< toast id="toast-example-1" header="First title" >}}
    This is the first toast message. It supports `markdown.`
{{< /toast >}}
{{< toast id="toast-example-2" header="Second title" >}}
    This is the second toast message. It supports `markdown.`
{{< /toast >}}


## Tooltip

{{< tooltip color="primary" title="Tooltip caption" href="#!" >}}Tooltip{{< /tooltip >}} demonstration