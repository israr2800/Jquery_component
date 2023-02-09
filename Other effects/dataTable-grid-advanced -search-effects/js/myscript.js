$(document).ready(function () {
	$("div").removeClass("tableLoad");
})
// all hideshow
function hideShowToggle(toggleClass){
	$("." + toggleClass).stop().toggle();
}
// all hideshow end

// <!-- ====================LEFT PANEL ON CLICK==================== -->
$(document).ready(function(){
  $('.clickButton').click(function(){
		$(this).toggleClass('position-inherit',500);
		$(".leftPanel").hide(0);
	  $('.leftPanelGrid').stop().toggle(500);
	});
	$('.hidePanelicon').click(function(){
	  $('.leftPanelGrid').hide(500);
	});
});
// <!-- ====================LEFT PANEL ON CLICK END ==================== -->

// <!-- ====================  TABLE GRID DATA TABLE ==================== -->

// var globDataTable;

$(document).ready(function(){
	
	globDataTable = $('#example').DataTable({
		"scrollY": "300px",
		"scrollX": true
	});
	$('#example').DataTable().draw();
});

function filterGlobal () {
	$('#example').DataTable().search(
			$('#global_filter').val(),
			$('#global_regex').prop('checked'),
			$('#global_smart').prop('checked')
	).draw();
}

function filterColumn ( i ) {
	$('#example').DataTable().column( i ).search(
			$('#col' + i + '_filter').val(),
			$('#col' + i + '_regex').prop('checked'),
			$('#col' + i + '_smart').prop('checked')
	).draw();
}

$(document).ready(function() {
	//$("#appynowButton").click(function(){ 

		globDataTable.search($("input.column_filter").val()).draw();  // add to search on click

	// $('input.global_filter').on( 'keyup click', function () { " use on instead prop "
	// 		filterGlobal();
	// } );

	// for global search only
	$('input.global_filter').on( 'keyup click', function () {
		filterGlobal();
	} );

	$('input.column_filter').on( 'keyup click', function () {
			filterColumn( $(this).parents('tr').attr('data-column') );
	} );
//});
});


// toggle dataTable specific column
$(".nameToggle").click(function () {
	var col = globDataTable.column(0);
	col.visible(!col.visible());
})
$(".positionToggle").click(function () {
	var col = globDataTable.column(1);
	col.visible(!col.visible());
})
$(".officeToggle").click(function () {
	var col = globDataTable.column(2);
	col.visible(!col.visible());
})
$(".ageToggle").click(function () {
	var col = globDataTable.column(3);
	col.visible(!col.visible());
})
$(".startdateToggle").click(function () {
	var col = globDataTable.column(4);
	col.visible(!col.visible());
})
$(".salaryToggle").click(function () {
	var col = globDataTable.column(5);
	col.visible(!col.visible());
})
// toggle dataTable specific column end

// <!-- ====================  TABLE GRID DATA TABLE END ==================== -->

// search left table
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
// search left table end

// voide dropbox close
$(document).on('click', '.preventDropboxClose', function (e) {
  e.stopPropagation();
});	
// voide dropbox close end


// auto arrange unchecked input box
$(document).ready(function(){
	var list = $(".autoArrangeUl");
	sortItems(list);
	var anch = $('#clear');
$('#clear').click(function(){   
	var list = $(".autoArrangeUl"); $(this).parents().eq(0).find(':checkbox').removeAttr('checked');
													 sortItems(list);
});
function sortItems(list){
	$(":checkbox").attr("autocomplete", "off");
	 origOrder = list.children();
	list.on("click", ":checkbox", function() {
			var i, checked = document.createDocumentFragment(),
					unchecked = document.createDocumentFragment();
			for (i = 2; i < origOrder.length; i++) {
					if (origOrder[i].getElementsByTagName("input")[0].checked) {
							checked.appendChild(origOrder[i]);
					} else {
							unchecked.appendChild(origOrder[i]);
					}
			}
			list.append(checked).append(unchecked);
	});
}
});
// auto arrange unchecked input box end

// hide to apply button when no input is checked
	var boxes = $('.mycheckBox');

	boxes.on('change', function () {
	$('#appynowButton').toggleClass('defaultHide', !boxes.filter(':checked').length);
	}).trigger('change');
// hide to apply button when no input is checked
