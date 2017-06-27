angular.module("MyFirstApp", [])
    .controller("FirstController", ["$scope", function(m) {
        m.nombre = "Damian";
        m.nuevoComentario = {};
        m.comentarios = [{
                comentario: "Buen tutorial!",
                username: "codigofacilito"
            },
            {
                comentario: "Malisimo tutorial, no son buenos maestros",
                username: "otro_usuario"
            }
        ];
        m.agregarComentario = function() {
            m.comentarios.push(m.nuevoComentario);
            m.nuevoComentario = {};
        }
    }]);