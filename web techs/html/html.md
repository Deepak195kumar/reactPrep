# What is HTML?

HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and layout of a web document by using a variety of tags and attributes.

# What are the basic tags in HTML?

Basic tags include <html>, <head>, <title>, <body>, <h1> to <h6> for headings, <p> for paragraphs, <a> for links, <img> for images, <ul> and <li> for lists, etc.

# What is the purpose of DOCTYPE in HTML?

<!DOCTYPE> declaration specifies the HTML version and helps the browser render the web page correctly.

# What are semantic elements in HTML5?

Semantic elements like <header>, <footer>, <nav>, <article>, <section>, <aside>, <figure>, <figcaption> provide more meaning to the content, aiding in better SEO and accessibility.

# What is the difference between <div> and <span>?

<div> is a block-level element used to group larger sections of content, while <span> is an inline element used for smaller text or elements within a line of content.

# How do you create a hyperlink in HTML?

Using the <a> tag: <a href="url">Link text</a>, where href specifies the destination URL and Link text is what appears as the clickable link.

# Explain the difference between GET and POST methods in HTML forms.

GET method sends form data as part of the URL query string, suitable for retrieving data from the server. POST method sends form data in the request body, suitable for sending large amounts of data securely.

# What are meta tags in HTML?

<meta> tags provide metadata about the HTML document, such as character set, page description, keywords, author information, etc., which are used by browsers and search engines.

# How can you embed a video in HTML?

Using the <video> tag: <video src="video.mp4" controls></video>, where src specifies the video file and controls adds playback controls.

# Explain the <iframe> tag and its use.

<iframe> is used to embed another document within the current HTML document. It's commonly used for embedding videos, maps, or other external content from different sources.

---

# inline elements - we can't give width and height for inline elements

but img tag is inline element - we can give width and height how?
The img tag is a bit of an exception to the general rule for inline elements. While it is technically an inline element, it is a `replaced element,`" meaning its appearance is defined by an external resource (the image file) rather than its content. Replaced elements, like img, input, textarea, select, and object, can have intrinsic dimensions that can be adjusted with CSS properties directly.
