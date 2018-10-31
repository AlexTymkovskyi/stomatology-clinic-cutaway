$( Document ).ready(function () {
    var error
    console.log(error);
    $("#form").submit(function (e) {
        e.preventDefault();
        errorList=0
        $(".alert").remove();
        var form = $(this);
        var p = form.serializeArray();
        p.forEach(function (item) {
            console.log(item)
            validate(item.name ,item.value);
        })
    })
    function validate(name,value) {
        console.log(name,value);
        if (name=="name"){
            if (value!=""){
                var pattern=/[^а-яА-Яa-zA-Z]/;
                var matches=value.match(pattern)
                if (matches){
                    $("input[name="+name+"]").after("<div class='alert alert-warning'> Проверте поле name верно</div>");
                }
            }else {
                $("input[name="+name+"]").after("<div class='alert alert-warning'> Проверте поле</div>");
            }
        }
        if (name=="phone"){
            if (value!=""){
                var pattern=/\D/;
                var result=pattern.test(value);
                $("input[name="+name+"]").after("<div class='alert alert-warning' style='display: none'> Проверте поле</div>");
                if (result){
                    $("input[name="+name+"]").after("<div class='alert alert-warning'> Проверте поле phone верно</div>");
                }
            }else {
                $("input[name="+name+"]").after("<div class='alert alert-warning'> Проверте поле</div>");
            }
        }
    }
})