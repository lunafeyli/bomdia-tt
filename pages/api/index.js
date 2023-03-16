import { parseRequest } from "../../lib/parser";
import { getScreenshot } from "../../lib/puppeteer";
import { getHtml } from "../../lib/html";
import axios from "axios";
import { createClient } from "pexels";

export default async function handle(req, res) {
  try {
    const parsedReq = parseRequest(req);

	const verticle = await axios
		.get("https://www.abibliadigital.com.br/api/verses/nvi/random")
		.then((data) => data.data)
		.catch((err) => console.error(err));

	const client = createClient(
		"563492ad6f9170000100000137c51c35be9e495d805d553b0ecaba16"
	);

	const photos = await client.photos
		.search({
			query: "nature",
			per_page: 1,
			page: Math.floor(Math.random() * (732 - 1) + 1),
		})
		.then((photos) => JSON.parse(JSON.stringify(photos)));

	const html = getHtml(
		{
			book: verticle.book.name,
			chapter: verticle.chapter,
			number: verticle.number,
			text: verticle.text,
		},
		photos.photos[0].src.original
	);

    const { fileType } = parsedReq;
    const file = await getScreenshot(html, fileType, parsedReq.text);

    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${fileType}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );

    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");

    console.error(e);
  }
}
