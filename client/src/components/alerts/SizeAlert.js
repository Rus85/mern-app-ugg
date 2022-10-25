import Swal from 'sweetalert2'


const showAlert = (props) => {
    Swal.fire({
        title: props.title,
        text: props.text,
        icon: props.icon,
        confirmButtonText: props.confirmButtonText,
    });
}

export default showAlert