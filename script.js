let locationDiv = document.getElementById("test_obs");

// if (localStorage.curLocation != null) {
// 	locationDiv.innerHTML = localStorage.curLocation;
// }

let body_tag = document.getElementById("bodytag")
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let list1 = document.getElementById("list1");
let list2 = document.getElementById("list2");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");



let getSummaryData = async () => {
    let response = await fetch('https://raw.githubusercontent.com/UCB-INFO-FRONTEND-WEBARCH/assignment-solutions/master/solutions.json');

    if (!response.ok) {
	    throw new Error(`HTTP error! status: ${response.status}`);
	} else {
	 	return response.json();
	}
}

getSummaryData().then((response) => { 
     /* This is where your code should be */
    
     user_keys = Object.keys(response.summary_by_user);
     
     var obj = JSON.parse(JSON.stringify(response));
     var summary_obj = JSON.parse(JSON.stringify(obj.summary));

     
     div1.innerHTML = `${'Tasks Created'}: ${summary_obj.count_tasks_created}`;
     div2.innerHTML = `${'Tasks Deleted'}: ${summary_obj.count_tasks_deleted}`;
     div3.innerHTML = `${'Tasks Edited'}: ${summary_obj.count_tasks_edited}`;

     top_5 = summary_obj.top_five_tags

    var header_name_1 = document.createElement("thead");
    var h2_1 = document.createElement("tr");
    var th_name_1 = document.createElement("th");
    var th_count = document.createElement("th");

    
    th_name_1.append("Name");
    th_count.append("Count");

    h2_1.append(th_name_1);
    h2_1.append(th_count);
  

    header_name_1.append(h2_1)

    table2.append(header_name_1);

   	for (var i = 0 ; i < top_5.length;i++){
      var rname = document.createElement("tr");
      var dname = document.createElement("td");
      var dcount = document.createElement("td");
      
   		// var li = document.createElement("label");
   		// var br = document.createElement("br");
   		dname.append(`${top_5[i].name}`)
      dcount.append(`${top_5[i].count}`)
   		// list2.append(li);
   		// list2.append(br);
      rname.append(dname);
      rname.append(dcount);
      table2.append(rname);

   	
   
   	}
    var header_name = document.createElement("thead");
    var h2 = document.createElement("tr");
    var th_name = document.createElement("th");
    var th_created = document.createElement("th");
    var th_deleted = document.createElement("th");
    var th_edited = document.createElement("th");
    var th_summary = document.createElement("th");
    
    th_name.append("Name");
    th_created.append("Tasks Created ");
    th_deleted.append("Tasks Deleted");
    th_edited.append("Tasks Edited");
    th_summary.append("Summary");

    h2.append(th_name);
    h2.append(th_created);
    h2.append(th_deleted);
    h2.append(th_edited);
    h2.append(th_summary);

    header_name.append(h2 )

    table1.append(header_name);

   	for (var i = 0 ; i < user_keys.length;i++){
   		var ulist = document.createElement("ul");
   		var row_name = document.createElement("tr");
   		var data_name = document.createElement("td");
   		var tasks_created = document.createElement("td");
   		var tasks_deleted = document.createElement("td");
   		var tasks_edited = document.createElement("td");
   		var tasks_top_5_data = document.createElement("td");
   		

   		data_name.append(`${response.summary_by_user[user_keys[i]].name}`);
   		tasks_created.append(`${response.summary_by_user[user_keys[i]].count_tasks_created}`);
   		tasks_deleted.append(`${response.summary_by_user[user_keys[i]].count_tasks_deleted}`);
   		tasks_edited.append(`${response.summary_by_user[user_keys[i]].count_tasks_edited}`);

   		top_5_2 = response.summary_by_user[user_keys[i]].top_five_tags
   		for (var j = 0 ; j < top_5_2.length;j++){
   			var li = document.createElement("li");
   			li.append(`${top_5_2[j].name  }: `)
   			li.append(` ${top_5_2[j].count } `)
   			ulist.append(li);
   	}
   		tasks_top_5_data.append(ulist)

   		
   		row_name.append(data_name);
   		row_name.append(tasks_created);
   		row_name.append(tasks_deleted);
   		row_name.append(tasks_edited);
   		row_name.append(tasks_top_5_data);

   		table1.append(row_name);
   		
   	}

   	// table1.classList.add("tableprop");
   	// body_tag.classList.add("pagelayout");

   	console.log(response);
     /* End section where your code should be */
});

