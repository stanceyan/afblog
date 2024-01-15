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

<!--- Colored alert -->
{{< alert color="primary" >}}
    A simple primary alert—check it out!
{{< /alert >}}

{{< alert color="secondary" >}}
    A simple secondary alert—check it out!
{{< /alert >}}

{{< alert color="success" >}}
    A simple success alert—check it out!
{{< /alert >}}

{{< alert color="danger" >}}
    A simple danger alert—check it out!
{{< /alert >}}

{{< alert color="warning" >}}
    A simple warning alert-check it out!
{{< /alert >}}

{{< alert color="info" >}}
    A simple info alert—check it out!
{{< /alert >}}

{{< alert color="light" >}}
    A simple light alert—check it out!
{{< /alert >}}

{{< alert color="dark" >}}
    A simple dark alert—check it out!
{{< /alert >}}

<!--- Dismissible alert -->
{{< alert color="danger" dismissible="true" >}}
    A simple danger alert—check it out!
{{< /alert >}}

<!--- Alert with icon -->
{{< alert color="danger" icon="fas triangle-exclamation" >}}
    An illustrated alert—check it out!
{{< /alert >}}

<!--- Alert of specific type -->
{{< alert type="info" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
{{< /alert >}}

{{< alert type="danger" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
{{< /alert >}}


## Badge

<!--- Heading badges -->
Heading 1 {{< badge title="New" >}} {.h1}
Heading 2 {{< badge title="New" >}} {.h2}
Heading 3 {{< badge title="New" >}} {.h3}
Heading 4 {{< badge title="New" >}} {.h4}
Heading 5 {{< badge title="New" >}} {.h5}
Heading 6 {{< badge title="New" >}} {.h6}

<!--- Colored badges -->
{{< badge title="primary" color="primary" >}}
{{< badge title="secondary" color="secondary" >}}
{{< badge title="success" color="success" >}}
{{< badge title="danger" color="danger" >}}
{{< badge title="warning" color="warning" >}}
{{< badge title="info" color="info" >}}
{{< badge title="light" color="light" >}}
{{< badge title="dark" color="dark" >}}

<!--- Pill badges -->
{{< badge title="primary" color="primary" class="rounded-pill" >}}
{{< badge title="secondary" color="secondary" class="rounded-pill" >}}
{{< badge title="success" color="success" class="rounded-pill" >}}
{{< badge title="danger" color="danger" class="rounded-pill" >}}
{{< badge title="warning" color="warning" class="rounded-pill" >}}
{{< badge title="info" color="info" class="rounded-pill" >}}
{{< badge title="light" color="light" class="rounded-pill" >}}
{{< badge title="dark" color="dark" class="rounded-pill" >}}


## Breadcrumb

{{< breadcrumb path="blog" >}}


## Button

<!--- Stateful buttons -->
{{< button color="primary" href="#!" state="enabled" >}}Enabled{{< /button >}}

{{< button color="primary" href="#!" state="disabled" >}}Disabled{{< /button >}}

{{< button color="primary" href="#!" state="active" >}}Active{{< /button >}}

{{< button color="primary" href="#!" state="inactive" >}}Inactive{{< /button >}}

<!--- Colored buttons -->
{{< button color="primary" href="#!" size="sm" >}}primary{{< /button >}}
{{< button color="secondary" href="#!" size="sm" >}}secondary{{< /button >}}
{{< button color="success" href="#!" size="sm" >}}success{{< /button >}}
{{< button color="danger" href="#!" size="sm" >}}danger{{< /button >}}
{{< button color="warning" href="#!" size="sm" >}}warning{{< /button >}}
{{< button color="info" href="#!" size="sm" >}}info{{< /button >}}
{{< button color="light" href="#!" size="sm" >}}light{{< /button >}}
{{< button color="dark" href="#!" size="sm" >}}dark{{< /button >}}

<!--- Buttons with a badge -->
{{< button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" badge="99+" >}}
    Inbox
{{< /button >}}

<!--- Buttons with a icon -->
{{< button icon="fab linkedin" cue=false order="first" href="https://linkedin.com" >}}LinkedIn{{< /button >}}

{{< button icon="fab linkedin" cue=false order="last" href="https://linkedin.com" >}}LinkedIn{{< /button >}}

{{< button icon="fab linkedin" href="https://linkedin.com" />}}

<!--- Buttons with a collapsible panel -->
{{< button color="secondary" collapse="collapse-1" >}}
    Collapse
{{< /button >}}
{{< collapse id="collapse-1" class="p-3 border rounded" >}}
    Some placeholder content for the collapse component. This panel is *hidden by default* but
    revealed when the user activates the relevant trigger.
{{< /collapse >}}


## Button group

{{< button-group aria-label="Basic example" >}}
  {{< button color="primary" href="#!" >}}Left{{< /button >}}
  {{< button color="primary" href="#!" >}}Middle{{< /button >}}
  {{< button color="primary" href="#!" >}}Right{{< /button >}}
{{< /button-group >}}


## Card

<!-- Colored cards  -->
{{< card-group cols="4" gutter="3" >}}
    {{< card color="primary" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="secondary" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="success" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="danger" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="warning" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="info" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="light" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="dark" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="white" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="black" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="body" path="blog/fourth-post" header="none" orientation="none" />}}
    {{< card color="body-tertiary" path="blog/fourth-post" header="none" orientation="none" />}}
{{< /card-group >}}


<!-- Custom header -->
{{< card-group cols="4" gutter="3" >}}
    {{< card path="blog/fourth-post" header="full" orientation="none" />}}
    {{< card path="blog/fourth-post" header="publication" orientation="none" />}}
    {{< card path="blog/fourth-post" header="tags" orientation="none" />}}
    {{< card path="blog/fourth-post" header="none" orientation="none" />}}
{{< /card-group >}}

{{< card path="about" padding="3" class="col-6 mx-auto" color="body-tertiary" header="publication" footer="none" />}}

<!-- Custom footer -->
{{< card-group cols="4" gutter="3" >}}
    {{< card path="blog/fourth-post" header="none" footer="full" orientation="none" />}}
    {{< card path="blog/fourth-post" header="none" footer="publication" orientation="none" />}}
    {{< card path="blog/fourth-post" header="none" footer="tags" orientation="none" />}}
    {{< card path="blog/fourth-post" header="none" footer="none" orientation="none" />}}
{{< /card-group >}}

<!-- Image placement -->
{{< card path="blog/fourth-post" header="none" footer="none" orientation="stacked" class="col-sm-12 col-lg-6 mx-auto mb-3" />}}
{{< card path="blog/fourth-post" header="none" footer="none" orientation="stacked" padding="3" class="col-sm-12 col-lg-6 mx-auto mb-3" />}}
{{< card path="blog/fourth-post" header="publication" footer="tags" orientation="horizontal" class="col-sm-12 col-lg-8 mx-auto" />}}
{{< card path="blog/fourth-post" header="publication" footer="tags" orientation="horizontal" padding="3" class="col-sm-12 col-lg-8 mx-auto" />}}

<!-- Inline content -->
{{< card header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto mb-3" title="Title" icon="fa address-card" >}}
    This is the `body` of the card. It supports Markdown.
{{< /card >}}
{{< card header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto" title="Title" thumbnail="img/book.jpg" >}}
    This is the `body` of the card. It supports Markdown too.
{{< /card >}}

<!-- Custom styling -->
{{< card path="blog/fourth-post" header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto card-shrink" />}}

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

<!--- 1x1 : square ; 3x2 & 4x3 & 16x9 & 21x9 : landscape ; omit ratio : original ; set portrait o true : portrait-->
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

<!-- {{< image src="img/responsive.png" mode="true" >}} -->

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


## Map

<!-- Zoom level -->
{{< map zoom=1 >}}

<!-- Center coordinates -->
{{< map lat=52.377 long=4.90 popup="Amsterdam Central Station" popup-lat=52.378062 popup-long=4.900562 >}}

<!-- Identification -->
{{< map id="leaflet-map-london" lat=51.505 long=-0.09 zoom=10 >}}


## Mark

Use the mark shortcode to {{< mark >}}highlight{{< /mark >}} specific text.


## Nav & tab

<!-- Vertical -->
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

<!-- Tabs -->
{{< nav type="tabs" id="tabs-1" >}}
  {{< nav-item header="Nav Item #1" show="true" >}}
    This is the first item's nav body. It supports Markdown content. The item is shown by adding
    the value `show` to the `class` argument.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #2" >}}
    This is the second item's nav body. It too supports HTML content.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #3" disabled="true" />}}
{{< /nav >}}

<!-- Pills -->
{{< nav type="pills" id="pills-1" >}}
  {{< nav-item header="Nav Item #1" show="true" >}}
    This is the first item's nav body. It supports Markdown content. The item is shown by adding
    the value `show` to the `class` argument.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #2" >}}
    This is the second item's nav body. It too supports HTML content.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #3" disabled="true" />}}
{{< /nav >}}

<!-- Underline -->
{{< nav type="underline" id="underline-1" >}}
  {{< nav-item header="Nav Item #1" show="true" >}}
    This is the first item's nav body. It supports Markdown content. The item is shown by adding
    the value `show` to the `class` argument.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #2" >}}
    This is the second item's nav body. It too supports HTML content.
  {{< /nav-item >}}
  {{< nav-item header="Nav Item #3" disabled="true" />}}
{{< /nav >}}

## Navbar

<!-- Brand text and logo -->
{{< navbar id="navbar-logo" logo="/img/logo_icon.svg" path="blog" color="body" size="md" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-title" title="Brand" path="blog" color="body" size="md" search="false" menus="sample" mode="false" >}}

<!-- Colored navbar -->
{{< navbar id="navbar-sample" path="blog" color="primary" size="md" search="false" menus="sample" title="Brand" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-1" path="blog" color="primary" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-2" path="blog" color="secondary" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-4" path="blog" color="danger" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-6" path="blog" color="info" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-7" path="blog" color="white" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-8" path="blog" color="black" size="sm" search="false" menus="sample" mode="false" >}}
{.mb-3}
{{< navbar id="navbar-color-10" path="blog" color="body-tertiary" size="sm" search="false" menus="sample" mode="false" >}}

<!-- Search input -->
{{< navbar id="navbar-search-1" search="true" path="blog" color="body" size="md" menus="sample" mode="false" >}}

<!-- Mode switcher -->
{{< navbar id="navbar-mode-1" mode="true" search="false" path="blog" color="body" size="md" menus="sample" >}}


## Persona

{{< persona thumbnail="/img/creator-1x1.jpg" title="Creators" color="primary" >}}
  As a content creator you value your independence. You like to take control of your
  online and offline presence. You want to focus on growing your audience, without
  limitations.
{{< /persona >}}


## Realease

{{< release version="v0.14.1" >}}
{{< release version="v0.14.1" short="true" >}}
{{< release version="v0.14.1" short="true" state="deprecated" >}}


## Spinner

<!-- Colored spinner -->
{{< spinner color="info" class="text-center" >}}
Loading...
{{< /spinner >}}
{{< spinner color="primary" >}}Loading...{{< /spinner >}}
{{< spinner color="secondary" >}}Loading...{{< /spinner >}}
{{< spinner color="success" >}}Loading...{{< /spinner >}}
{{< spinner color="danger" >}}Loading...{{< /spinner >}}
{{< spinner color="warning" >}}Loading...{{< /spinner >}}
{{< spinner color="info" >}}Loading...{{< /spinner >}}
{{< spinner color="light" >}}Loading...{{< /spinner >}}
{{< spinner color="dark" >}}Loading...{{< /spinner >}}
{{< spinner color="white" >}}Loading...{{< /spinner >}}
{{< spinner color="black" >}}Loading...{{< /spinner >}}

<!-- Growing spinner -->
{{< spinner grow="true" color="info" class="text-center" >}}
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

{{< tooltip color="info" title="Tooltip" href="#!" >}}
    Tooltip demonstration
{{< /tooltip >}}


## Youtube
{{< youtube w7Ft2ymGmfc>}}
