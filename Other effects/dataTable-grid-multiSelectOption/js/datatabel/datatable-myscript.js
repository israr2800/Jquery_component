$(document).ready(function() {
    // showing data table after full load
    $('#example').show();
    // showing data table after full load end

    var table = $('#example').DataTable({ // add "var table" for multiselect
        "scrollY": 300,
        "scrollX": true,
        "ordering": false, 
        // "lengthChange": true,

        // multi select filter with select2
        initComplete: function () {
            count = 0;
            this.api().columns().every( function () {
                var title = this.header();
                //replace spaces with dashes
                title = $(title).html().replace(/[\W]/g, '-');
                var column = this;
                var select = $('<select id="' + title + '" class="select2" ></select>')
                    .appendTo( $(column.header()).empty() )
                    .on( 'change', function () {
                      //Get the "text" property from each selected data 
                      //regex escape the value and store in array
                      var data = $.map( $(this).select2('data'), function( value, key ) {
                        return value.text ? '^' + $.fn.dataTable.util.escapeRegex(value.text) + '$' : null;
                                 });
                      
                      //if no data selected use ""
                      if (data.length === 0) {
                        data = [""];
                      }
                      
                      //join array into string with regex or (|)
                      var val = data.join('|');
                      
                      //search for the option(s) selected
                      column
                            .search( val ? val : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' );
                } );
              
              //use column title as selector and placeholder
              $('#' + title).select2({
                multiple: true,
                closeOnSelect: false,
                placeholder: "Select a " + title
              });
              
              //initially clear select otherwise first option is selected
              $('.select2').val(null).trigger('change');
            } );
        },

        // multi select filter with select2 end

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