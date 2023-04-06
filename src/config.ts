// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const pagesString =
  // BEGIN JSON
  `{"BASE":{ "title": "Astrolus", "desc": "A minimal, responsive and SEO-friendly Astro blog theme."},"HOME":{"TEXT":{"Heading":"Shaping a world with reimagination.","Description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!"},"LINKS":{ "Link Primary": { "href": "https://www.example.com", "content": "Get started"}, "Link Secondary": { "href": "https://www.example.com", "content": "Learn more"}},"IMAGES":{}}}`;
// END JSON
const pagesObject = JSON.parse(pagesString);
export const BASE = pagesObject.BASE;
export const HOME = pagesObject.HOME;
