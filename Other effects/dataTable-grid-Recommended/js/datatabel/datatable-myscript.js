
$(document).ready(function() {
    // showing data table after full load
    $('#example').show();
    // showing data table after full load
    $('#example').DataTable({
        "scrollY": 300,
		"scrollX": true,
		
		// "lengthChange": true,
		

        // for the copy excel psd etc buttons
		dom: 'Bfrtip',		
		
        buttons: [{
                extend: 'copy',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'csv',
                exportOptions: {
                    columns: ':visible'

                }
            },
            {
                extend: 'excel',
                exportOptions: {
                    columns: ':visible',
                    columns: "thead th:not(.noExport)" // to not download first column
                }
            },
            {
                extend: 'pdf',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'print',
                exportOptions: {
                    columns: ':visible'
                }
            },
			'colvis',
			'pageLength' // page length enable disabled
        ],
        columnDefs: [{
            targets: 0,
            visible: true
        }]
        // for the copy excel psd etc buttons end

    });
});


// data table searching
function filterGlobal() {
    $('#example').DataTable().search(
        $('#global_filter').val(),
        $('#global_regex').prop('checked'),
        $('#global_smart').prop('checked')
    ).draw();
}

function filterColumn(i) {
    $('#example').DataTable().column(i).search(
        $('#col' + i + '_filter').val(),
        $('#col' + i + '_regex').prop('checked'),
        $('#col' + i + '_smart').prop('checked')
    ).draw();
}

$('input.global_filter').on('keyup click', function() {
    filterGlobal();
});

$('input.column_filter').on('keyup click', function() {
    filterColumn($(this).parents('tr').attr('data-column'));
});
// data table searching end
