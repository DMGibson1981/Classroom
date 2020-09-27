const mongoose = require("mongoose");
const Course = require("./models/course.js");

const data = [
    {
        courseId: "538c7e092403d111454f5f76",
        courseName: "Course One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dolor ut dignissim semper, risus dolor facilisis sem, nec suscipit ante nunc eu odio. Nam volutpat erat augue, in dignissim odio vulputate eu. Cras a vulputate dolor, nec porta ligula. Nam diam lacus, tincidunt sed viverra eu, cursus sed neque.",
        module: [
            {
                moduleName: "Module One",
                moduleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam eros dolor, id vehicula risus auctor et. Nulla et elit vitae sapien consectetur tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada libero vel condimentum mollis. Sed tempus odio et sem suscipit, a tempor dui viverra. Aliquam suscipit ornare mi sit amet suscipit. Phasellus nulla tortor, porttitor et feugiat sed, imperdiet quis elit. Maecenas elementum metus eu egestas laoreet. Curabitur bibendum laoreet rhoncus. Quisque porta eu velit eu lobortis. Vestibulum quis ultricies est. Integer commodo semper velit, sit amet pulvinar leo scelerisque ut. Nunc ut mauris aliquet, laoreet purus quis, varius leo. ",
                slideList: ["Module1 Lesson1 pt1.jpg", "Module1 Lesson1 pt2.jpg", "Module1 Lesson1 pt3.jpg", "Module1 Lesson1 pt4.jpg", "Module1 Lesson1 pt5.jpg"]
            },
            {
                moduleName: "Module Two",
                moduleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam eros dolor, id vehicula risus auctor et. Nulla et elit vitae sapien consectetur tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                slideList: ["Module1 Lesson2 pt1.jpg", "Module1 Lesson2 pt2.jpg", "Module1 Lesson2 pt3.jpg", "Module1 Lesson2 pt4.jpg"]
            },
            {
                moduleName: "Module Three",
                moduleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam eros dolor, id vehicula risus auctor et. Nulla et elit vitae sapien consectetur tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada libero vel condimentum mollis. Sed tempus odio et sem suscipit, a tempor dui viverra.",
                slideList: ["Module1 Lesson3 pt1.jpg", "Module1 Lesson3 pt2.jpg", "Module1 Lesson3 pt3.jpg", "Module1 Lesson3 pt4.jpg"]
            }
        ]
    },
    {
        courseId: "524d7e090103d191454a9d43",
        courseName: "Course Two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, dolor ut dignissim semper, risus dolor facilisis sem, nec suscipit ante nunc eu odio. Nam volutpat erat augue, in dignissim odio vulputate eu. Cras a vulputate dolor, nec porta ligula. Nam diam lacus, tincidunt sed viverra eu, cursus sed neque. Etiam at orci eget quam aliquet hendrerit. Praesent iaculis dolor odio. Praesent et urna turpis. Ut dapibus eleifend ex quis bibendum. Duis eget dignissim sapien. Cras sodales nisi ac arcu pellentesque, in rhoncus leo egestas. Nam sed erat imperdiet, ultrices erat et, mattis nunc. ",
        module: [
            {
                moduleName: "Module One",
                moduleDescription: "This is Lesson 1",
                slideList: ["Module1 Lesson1 pt1.jpg", "Module1 Lesson1 pt2.jpg", "Module1 Lesson1 pt3.jpg", "Module1 Lesson1 pt4.jpg", "Module1 Lesson1 pt5.jpg"]
            },
            {
                moduleName: "Module Two",
                moduleDescription: "This is Lesson 2",
                slideList: ["Module1 Lesson2 pt1.jpg", "Module1 Lesson2 pt2.jpg", "Module1 Lesson2 pt3.jpg", "Module1 Lesson2 pt4.jpg"]
            },
            {
                moduleName: "Module Three",
                moduleDescription: "This is Lesson 3",
                slideList: ["Module1 Lesson3 pt1.jpg", "Module1 Lesson3 pt2.jpg", "Module1 Lesson3 pt3.jpg", "Module1 Lesson3 pt4.jpg"]
            }
        ]
    }

]
 
function seedDB(){
    Course.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Courses Removed!");
        data.forEach(function(seed){
            Course.create(seed, function(err, Courses){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added a Course!");
                }
            });
        });
    });
}

module.exports = seedDB;