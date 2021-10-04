const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    return await axios.get("https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%BD%94%EC%9D%B8");
  } catch (error) {
    console.error(error);
  }
 
};

async function Main(){
  const item = await getHtml();
  let ulList = [];
  const $ = cheerio.load(item.data);
  const $bodyList = $("ul.list_news").children("li")
  $bodyList.each(function(i, elem) {
    ulList[i] = {
        title: $(this).find('div.news_wrap.api_ani_send div.news_area a.news_tit').text(),
        url: $(this).find('div.news_wrap.api_ani_send div.news_area a.news_tit').attr('href')
    };
  });

  const data = ulList.filter(n => n.title);
  return data;
}



module.exports = Main;
