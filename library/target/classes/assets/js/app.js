$(":button").click(function() {
	var isbnid = this.id;
	var targeturl = 'http://localhost:8001/library/v1/books/'+isbnid+'?status=lost';
	var buttonisbnid = ':button#'+isbnid;
	
	$.ajax({
		  url: targeturl,
		  type: 'PUT',
		  success: function()
		  {
			  alert('About to report lost on isbnid ' + isbnid);
			  location.reload();
		  }
		});
	
	$(buttonisbnid).attr("disabled",true);
});