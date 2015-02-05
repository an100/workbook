
function main() {
    $.getJSON("res/data.json",
        function (jsonData) {
            var s = "";
            for (var i = 0; i < jsonData.length; i++) {
                var imageData = jsonData[i];
                s += '<div class="row">';
                s += '  <div class="col-sm-6">';
                s += '    <img src="' + imageData.orig + '" class="img-responsive"/>';
                s += '  </div>';
                s += '  <div class="col-sm-6">';
                s += '    <img src="' + imageData.trunc + '" class="img-responsive"/>';
                s += '  </div>';
                s += '</div>';
                s += '<hr>';
            }
            document.getElementById("imageData").innerHTML = s;
        })
        .fail(function (d) { alert("Failed to load JSON!"); })
    ;                              
}
