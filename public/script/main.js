var server_addr = "http://localhost:3000";

var records = [
{
	"ID":"16586",
	"plot":"136",
	"test_name":"OXWP17St1",
	"city":"Oxnard",
	"variety":"EN074",
	"area_selected":"OX WP",
	"picture":"https:\/\/dl.dropbox.com\/s\/wsowww7ttxz3id\/field_12345678.jpg?dl=0",
	"plot_id":"136"
},
{
	"ID":"16587",
	"plot":"137",
	"test_name":"OXWP17St2",
	"city":"NJ",
	"variety":"EN075",
	"area_selected":"OX WP",
	"picture":"https:\/\/dl.dropbox.com\/s\/wsowww7ttxz3id\/field_12345678.jpg?dl=0",
	"plot_id":"137"
}
];


$(document).ready(function(){
	//$.get("https://driscolls.iformbuilder.com/exzact/dataJSON.php?PAGE_ID=2434199&TABLE_NAME=_data352854_nl_strawberry_multi_stage_field_observation&USERNAME=hamzahmidi&PASSWORD=F!verr123", function(records) {
		for(var i=0; i<records.length; i++) {
			var ele = document.createElement("a");
			ele.setAttribute("id", i);
			ele.innerText = records[i].test_name;
			ele.setAttribute("class", "btn btn-small, btn-info");
			ele.setAttribute("href", server_addr + "/downloadFile?plot_id=" + records[i].plot + "&city=" + records[i].city + "&variety=" + records[i].variety);
			$(".container").append(ele);
		}
	//});
});