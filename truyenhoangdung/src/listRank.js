function execute(url) {
  let response = fetch(url);

  if (response.ok) {
    let doc = response.html();
    let infoHtml = doc.select("#chi_tiet .info");
    let name = infoHtml.select(".title").first();
    let cover = doc
      .select("#chi_tiet .image-cover img")
      .first()
      .attr("src")
      .replace("/publics", "https://truyenhoangdung.xyz/publics");
    let author = infoHtml
      .select(".list .item")
      .get(1)
      .select(".item-value")
      .text();
    let des = doc.select("#noidung").html();
    let detail =
      "Tên gốc: " +
      infoHtml.select(".list .item").get(0).select(".item-value").text();
    let status = infoHtml
      .select(".list .item")
      .get(3)
      .select(".item-value")
      .text();

    return Response.success({
      name: name.text(),
      cover,
      author: author || "Unknow",
      description: des,
      detail,
      ongoing: status === " Hoàn Thành",
      host: "https://truyenhoangdung.xyz",
    });
  }

  return null;
}
