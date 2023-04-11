// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const pagesString =
  // BEGIN JSON
  `{"BASE":{ "title": "Astrolus", "desc": "A minimal, responsive and SEO-friendly Astro blog theme."},"HOME":{"TEXT":{"Heading":"Shaping a world with reimagination.","Description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!","Blurb 1 Title":"The lowest price","Blurb 1 Text":"Some text here","Blurb 2 Title":"The fastest on the market","Blurb 2 Text":"Some text here","Blurb 3 Title":"The most loved","Blurb 3 Text":"Some text here","Section 1 Title":"A technology-first approach to payments and finance","Section 1 Text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur eligendi magni adipisci.","Feature 1 Title":"First feature","Feature 1 Text":"Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.","Feature 2 Title":"Second feature","Feature 2 Text":"Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.","Feature 3 Title":"Third feature","Feature 3 Text":"Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.","Feature 4 Title":"More features","Feature 4 Text":"Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.","Section 2 Title":"Nuxt development is carried out by passionate developers","Section 2 Text P1":"Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.","Section 2 Text P2":"Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.","Highlight 1 Title":"Chat Anytime","Highlight 1 Text":"Asperiores nemo possimus nesciunt quam mollitia.","Highlight 2 Title":"Real Time Location","Highlight 2 Text":"Asperiores nemo possimus nesciunt quam mollitia."},"LINKS":{ "Link Primary": { "href": "https://www.example.com", "content": "Get started"}, "Link Secondary": { "href": "https://www.example.com", "content": "Learn more"}},"IMAGES":{}}}`;
// END JSON
const pagesObject = JSON.parse(pagesString);
export const BASE = pagesObject.BASE;
export const HOME = pagesObject.HOME;
