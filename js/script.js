$(document).ready(function(){
	// code goes here
	// 1
	$( "#draggable" ).draggable();
	// 1
	// 2
	$( "#draggable1" ).draggable();
    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
	// 2
	// 3
	$( "#resizable" ).resizable();
	// 3
	// 4
	$( "#selectable" ).selectable();
	// 4
	// 5
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
	// 5
});