HTML (HyperText Markup Language) is the standard language used to create webpages. 
It defines the structure, layout, and elements that make up a website — 
such as text, images, links, videos, and forms.
Let’s break the term down:
	• HyperText: Refers to text that contains links (called hyperlinks) to other web pages. These links connect different pages and make website navigation possible.
Example: <a href="about.html">About Us</a> connects one page to another.
	• Markup Language: Means using tags to “mark up” content so that browsers 
    know how to display it.
Example: <h1> for headings, <p> for paragraphs, <img> for images.
Together, HTML tells the browser what to display, while CSS tells it how to display it 
(style, color, layout), and JavaScript adds interactivity.
Analogy:
If a website were a human body —
	• HTML is the skeleton (structure)
	• CSS is the skin and clothing (style)
	• JavaScript is the brain and muscles (behavior)
Note: HTML is the backbone of every website — it defines what appears on the page and how the content is arranged.

Why Do We Need HTML and What Is Its Importance?
We need HTML because it is the foundation of web development. Without it, browsers would not understand how to structure or display content.
Importance of HTML
Concept	Description
Basic Building Block	HTML is the starting point for all websites. Every web page you see — from Google to YouTube — is built with HTML.
Defines Structure	It organizes content using tags like <header>, <section>, <article>, <footer>, etc.
Supports Multimedia	HTML supports embedding images, videos, audio, and interactive elements (like <video>, <audio>, <canvas>).
Works with CSS & JavaScript	HTML handles structure, CSS handles design, and JavaScript handles interactivity — the three pillars of front-end development.
Universally Supported	Every modern browser (Chrome, Firefox, Safari, Edge) understands HTML, making it the universal web language.
SEO & Accessibility	Proper HTML structure improves SEO (search ranking) and accessibility for screen readers and users with disabilities.

Basic Structure of HTML
Copy
​<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Page Content Goes Here -->
</body>
</html>
​!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
Breakdown:
	• <!DOCTYPE html> → Defines HTML5 document.
	• <html lang="en"> → Root element with language attribute.
	• <head> → Metadata (title, character set, viewport).
<body> → Visible content of the webpage.

Common Elements Inside <head>
	1. <title> – Page Title
	2. <meta> – Metadata for SEO & Settings
	3. <link> – Linking External Resources
	4. <style> – Internal CSS
	5. <script> – JavaScript (Optional in <head>)
	6. <base> – Base URL for Relative Links
Why is the <head> Section Important?
	• Provides SEO-friendly metadata
	• Ensures proper rendering on all devices
	• Helps browsers load external stylesheets, fonts, and icons
	• Improves performance with preload, preconnect, and caching instructions

Common HTML Text Formatting Tags:
	• <b>: Bold text
	• <i>: Italic text
	• <u>: Underlined text
	• <strong>: Strong importance
	• <em>: Emphasized text
	• <small>: Smaller text
	• <mark>: Highlighted text
	• <sub> / <sup>: Subscript / Superscript
Formatting is done using two types of tags:
1. Physical (Presentational) Tags
2. Logical (Semantic) Tags

 Physical Tags (Presentational Tags)
	• Used only for visual style
	• They don’t give any extra meaning. (non-semantic)
	• Example: <b>, <i>, <u>, <small>, <sup>, <sub>
<b> – Bold Text
	• Makes text bold (only for styling, no extra meaning).
Example:

<p>This is <b>bold</b><i><small> text</small></i>.</p>

Logical Tags (Semantic Tags)
Tags that give meaning + style to text 
(important, emphasized, highlighted, deleted, inserted, etc.).
They are useful for SEO, accessibility, and screen readers.
Example: <strong>, <em>, <mark>, <del>, <ins>
<strong> – Important Text
	• Also makes text bold, but with semantic meaning (used for important text).
	• Screen readers read it with emphasis.


Entity	Symbol	Description
&lt;	<	Less-than symbol
&gt;	>	Greater-than symbol
&amp;	&	Ampersand
&nbsp;	(space)	Non-breaking space
&copy;	©	Copyright symbol
&reg;	®	Registered trademark
&trade;	™	Trademark
&quot;	"	Double quotation mark
&apos;	'	Single quotation mark


<blockquote> – Block Quotation
	• Used for longer quotes (multi-line or paragraph-sized).
	• Browsers usually indent the text block for readability.
	• Can also include a cite attribute to indicate the source URL.

Lists in HTML
Lists in HTML are used to display information in a structured and easy-to-read format. They help in organizing data like items, steps, or points in a web page.
There are mainly 3 types of lists in HTML:
	1. Ordered List (<ol>) → Numbered list
	2. Unordered List (<ul>) → Bulleted list
	3. Definition List (<dl>, <dt>, <dd>) → Term and description list
	• <dl> (Definition List): The container that holds the entire list.
	• <dt> (Definition Term): Defines the term or name.
	• <dd> (Definition Description): Provides the definition or explanation of the term.



Also, we can use Nested Lists (a list inside another list).
Ordered List (<ol>)
An ordered list is used when the order of items is important, like steps or instructions.
	• Uses numbers (1, 2, 3 …) by default.
	• Each item is written inside the <li> tag.



What are Links in HTML?
A link in HTML is a clickable element (text or image) that redirects the user to another webpage, file, or resource.
Links make a website interactive, user-friendly, and connected to other resources on the internet.
Basic Syntax:

<a href="URL">Clickable Text</a>
Anchor Tag <a> in HTML
The <a> (anchor) tag is used to create links.
Basic Syntax:

<a href="url">Link Text</a>
	• href → Hyperlink Reference (destination URL).
	• Link Text → The clickable text visible to users.
Example:

<a href="https://www.example.com">Visit Example Website</a>
Here are the main types of links: 
a) Absolute URL (External Links)
A complete web address including https:// or http://.
Always points to the same resource, no matter where your website is hosted.
Example : 

<a href="https://www.google.com">Go to Google</a>
b) Relative URL (Internal Links)
A shorter path that points to files or pages inside your own website.
Depends on your website’s folder structure.
Example : 

<a href="about.html">About Us</a>
c) Email Links (mailto:)
Opens the default email client to send a mail.
Example :

<a href="mailto:info@example.com">Send Email</a>
d) Phone Links (tel:)
Useful for mobile users to dial numbers directly.
Example : 

<a href="tel:+919876543210">Call Us</a>
e) Internal Page Navigation (Bookmarks)
Jump to a specific section on the same page.
They are useful when the page is long, so users don’t need to scroll manually.
Example :

<a href="#contact">Go to Contact Section</a>
<h2 id="contact">Contact Us</h2>
<p>Email: info@example.com</p>
	• id="contact" → creates the bookmark spot.
	• href="#contact" → jumps to that spot when clicked.
f) Download Links
Links can also be used to download files.
Example :

<a href="files/tutorial.pdf" download>Download PDF</a>
g) Image Links
An image can also be clickable as a link.
Example :

<a href="https://example.com">
  <img src="logo.png" alt="Company Logo">
</a>
Opening Links in a New Tab
You can use target="_blank" to open links in a new browser tab.
Example :

<a href="https://www.wikipedia.org" target="_blank">Open Wikipedia</a>
Why Links are Important?
	• They connect webpages together and form the structure of the web.
	• Improve user navigation and experience.
	• Help search engines crawl and index pages effectively.
Allow for interaction beyond the site (emails, downloads, external resources).



HTML Semantic Tags and Their Uses
Semantic HTML tags are HTML elements that convey the meaning and structure of the content they contain. Using these tags makes your webpage more organized, readable, and accessible.
Common Semantic Tags and Their Uses:
Structural Tags: <header>, <footer>, <main>, <section>, <article> – define the layout and structure of content.
Navigation & Supporting Tags: <nav>, <aside> – help users navigate or provide related content.
Media & Figures: <figure>, <figcaption> – group images, charts, and provide captions.
Text-Level Semantics: <time>, <mark> – highlight important text or specify dates/times.
Interactive Elements: <summary>, <details> – create collapsible or interactive content blocks.




