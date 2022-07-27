function doGet(){
    const html = HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    return html
}