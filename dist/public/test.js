app.controller('HomeController', ['$scope', '$http','$routeParams','$location', function($scope, $http,$routeParams,$location){
    $scope.message = '¡Bienvenido a la página de inicio!';
    $plazas = ""

    $scope.hola = function(){
        // Swal.fire({
        //     title: "Submit your Github username",
        //     input: "text",
        //     inputAttributes: {
        //       autocapitalize: "off"
        //     },
        //     showCancelButton: true,
        //     confirmButtonText: "Look up",
        //     showLoaderOnConfirm: true,
        //     preConfirm: async (login) => {
        //       try {
        //         const githubUrl = `
        //           https://api.github.com/users/${login}
        //         `;
        //         const response = await fetch(githubUrl);
        //         if (!response.ok) {
        //           return Swal.showValidationMessage(`
        //             ${JSON.stringify(await response.json())}
        //           `);
        //         }
        //         return response.json();
        //       } catch (error) {
        //         Swal.showValidationMessage(`
        //           Request failed: ${error}
        //         `);
        //       }
        //     },
        //     allowOutsideClick: () => !Swal.isLoading()
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire({
        //         title: `${result.value.login}'s avatar`,
        //         imageUrl: result.value.avatar_url
        //       });
        //     }
        //   });
        // Swal.fire({
        //     title: "Do you want to save the changes?",
        //     showDenyButton: true,
        //     showCancelButton: true,
        //     confirmButtonText: "Save",
        //     denyButtonText: `Don't save`
        //   }).then((result) => {
        //     /* Read more about isConfirmed, isDenied below */
        //     if (result.isConfirmed) {
        //       Swal.fire("Saved!", "", "success");
        //     } else if (result.isDenied) {
        //       Swal.fire("Changes are not saved", "", "info");
        //     }
        //   });
        // Swal.fire({
        //     title: "<strong>HTML <u>example</u></strong>",
        //     icon: "info",
        //     html: `
        //       You can use <b>bold text</b>,
        //       <a href="#">links</a>,
        //       and other HTML tags
        //     `,
        //     showCloseButton: true,
        //     showCancelButton: true,
        //     focusConfirm: false,
        //     confirmButtonText: `
        //       <i class="fa fa-thumbs-up"></i> Great!
        //     `,
        //     confirmButtonAriaLabel: "Thumbs up, great!",
        //     cancelButtonText: `
        //       <i class="fa fa-thumbs-down"></i>
        //     `,
        //     cancelButtonAriaLabel: "Thumbs down"
        //   });
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire({
        //         title: "Deleted!",
        //         text: "Your file has been deleted.",
        //         icon: "success"
        //       });
        //     }
        //   });
        // Swal.fire({
        //     icon: "success",
        //     title: "Your work has been saved",
        //     showConfirmButton: true,
        //     // timer: 1500
        // });
    }

}]);
