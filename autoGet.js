//指定したアカウントのフォロワー数を自動取得するプログラム
//※当スクリプトは本来であればTwitterの利用規約に違反するプログラムである。
//2021年1月7日現在、【フォロワー数】、【いいね！の数】のみ取得可能、今後いつ取得できなくなるかは不明

function TwitterFollowers() {
    //指定した場所へ取得した数値を指定して吐き出す
    var sheet = SpreadsheetApp.getActiveSheet();
    var today = Utilities.formatDate(new Date(), "JST","yyyy/MM/dd")
    //行を指定
    var lastRow = sheet.getLastRow()
    var row = lastRow + 1;
    
    //Twitterから欲しい情報をスクレイピングする
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // getTwitterNumFollowersJsonにIDをセット
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //ここに入力したいアカウントの個数result**~result**を用意

    var result0 = getTwitterNumFollowersJson("");
    var result1 = getTwitterNumFollowersJson("");
    var result2 = getTwitterNumFollowersJson("");
    var result3 = getTwitterNumFollowersJson("");
    var result4 = getTwitterNumFollowersJson("");
    var result5 = getTwitterNumFollowersJson("");
    var result6 = getTwitterNumFollowersJson("");
    var result9 = getTwitterNumFollowersJson("");
    var result10 = getTwitterNumFollowersJson("");
    var result11 = getTwitterNumFollowersJson("");

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 以下、取得した数値をどこに吐き出すかを指定
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    //スクリプト実行日の確認用
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result0.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result1.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result2.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result3.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result4.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result5.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result6.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result9.followers_count);
    sheet.getRange("").setValue(today);
    sheet.getRange("").setValue(result10.followers_count);
    // アカウント名「@ここにTwitterID("ここに名前")」
    // sheet.getRange("C ").setValue(today);
    // sheet.getRange("C ").setValue(result .followers_count);
    }
     
    function getTwitterNumFollowersJson(screenName) {
    var baseURL = "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=";
    var response = UrlFetchApp.fetch(baseURL + screenName);
    var result = null;
     
    if (response.getResponseCode() == 200) {
      var text = response.getContentText("utf-8");
     
      if (text != "") {
        var data = JSON.parse(text);
          if (data.length == 1) {
            result = data[0];
          }
      }
    }
    return result;
    }
     
    function getNumFollowers(screenName) {
      var result = getTwitterNumFollowersJson(screenName);
        if (result) {
          return result.followers_count;
        } else {
          return 0; // Not Found;
    }
     
}
    