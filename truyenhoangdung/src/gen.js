function execute(url, page) {
  if (!page) page = "1";

  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    let el = doc.select(
      "#myTabContent li.list-group-item.list-group-item-table"
    );
    let data = [];

    function toCapitalize(sentence) {
      const words = sentence.split(" ");

      return words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    }

    el.forEach((e) => {
      let img = e.select("img").first().attr("src");
      if (img.startsWith("/publics"))
        img = img.replace("/publics", "https://truyenhoangdung.xyz/publics");

      data.push({
        name: e.select(".thumb").first().attr("title"),
        link:
          e.select(".thumb").first().attr("href") +
          "https://truyenhoangdung.xyz",
        cover: e
          .select("img")
          .first()
          .attr("src")
          .replace("/publics", "https://truyenhoangdung.xyz/publics"),
        description: "",
        host: "https://truyenhoangdung.xyz",
      });
    });
    return Response.success(data);
  }
  return null;
}
