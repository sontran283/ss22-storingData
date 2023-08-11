// bai 1
// Tạo một ứng dụng Todo-list
// Phải thực hiện được đầy đủ các tính năng Create - Read - Update - Delete
// Dữ liệu phải được lưu vào Local Storage và không bị mất đi khi load lại trang
// let push = JSON.parse(localStorage.getItem("comeinputback", comeback));

// goi ham
// goi ham
let thead = [
    {
        id: 1,
        name: " Learn JavaScrip",
    },
]

// goi ra html
// goi ra html
function taskList() {
    let string = "";
    for (let i = 0; i < thead.length; i++) {
        let element = thead[i]

        string += ` <div class="click">
                <div>
                    <ul>
                        <li><input id="radio" type="radio" name="name"> <span>${element.name}</span></li>
                    </ul>
                </div>
                <div>
                    <i id="i_click" class="fa-solid fa-circle-xmark" style="color: #9d0707;"></i></i>
                </div>
            </div>
            `

    }
    document.getElementById("main").innerHTML = string;
}
taskList();


function idtutang() {
    let idmax = 0;
    for (i = 0; i < thead.length; i++) {
        if (thead[i] < idmax) {
            idmax = thead[i];
        }
    }
    return ++idmax
}

// chuc nang them
// chuc nang them
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault()
    let newcontent = document.getElementById("content").value;
    let id = idtutang()
    let obj = {
        id,
        name: newcontent,
    }
    thead.push(obj);
    document.getElementById("content").value = "";
    taskList();
})


//






























// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Cập nhật danh sách công việc hiển thị
// function updateTaskList() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//       <input type="radio" name="task" id="task${index + 1}" ${task.completed ? 'checked' : ''}>
//       <span>${task.name}</span>
//       <button class="delete-button" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
//     `;
//         taskList.appendChild(li);
//     });
// }

// // Thêm công việc mới
// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskName = taskInput.value.trim();

//     if (taskName !== '') {
//         const newTask = {
//             name: taskName,
//             completed: false
//         };

//         tasks.push(newTask);
//         localStorage.setItem('tasks', JSON.stringify(tasks));

//         taskInput.value = '';
//         updateTaskList();
//     }
// }

// // Xoá công việc
// function deleteTask(index) {
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     updateTaskList();
// }

// // Đánh dấu công việc đã hoàn thành
// function markCompleted(index) {
//     tasks[index].completed = !tasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     updateTaskList();
// }

// // Bắt sự kiện click nút "Add Task"
// const addButton = document.getElementById('addButton');
// addButton.addEventListener('click', addTask);

// // Bắt sự kiện click nút "Delete"
// const taskList = document.getElementById('taskList');
// taskList.addEventListener('click', event => {
//     if (event.target.classList.contains('delete-button')) {
//         const index = parseInt(event.target.getAttribute('data-index'));
//         deleteTask(index);
//     }
// });

// // Bắt sự kiện click vào checkbox
// taskList.addEventListener('change', event => {
//     if (event.target.type === 'radio') {
//         const index = parseInt(event.target.id.replace('task', '')) - 1;
//         markCompleted(index);
//     }
// });

// // Cập nhật danh sách công việc lần đầu khi trang được tải
// updateTaskList();