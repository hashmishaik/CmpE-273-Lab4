$(":button").click(function() {
        var isbnid = this.id;
        var targeturl = 'http://localhost:8001/library/v1/books/'+isbnid+'?status=lost';
        var buttonisbnid = ':button#'+isbnid;
        $.ajax({
                 url: targeturl,
                 type: 'PUT',
                 success: function(data) {
                         alert('About to report lost on isbnid ' + isbnid);
                         location.reload();
                 }
                });
        $(buttonisbnid).attr("disabled",true);
});


$(document).ready(function() {
        var books = document.getElementById("books");
        for (var i = 0, row; row = books.rows[i]; i++) {
                var bookStatus=books.rows[i].cells[4].innerHTML;
                if (bookStatus=="lost")
                {
                        var newisbnid=books.rows[i].cells[0].innerHTML;
                        document.getElementById(newisbnid).disabled = true;
                }
        }
});