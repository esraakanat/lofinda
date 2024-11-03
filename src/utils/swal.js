import Swal from "sweetalert2";

const swalNotify = (type, title, text) => {
	Swal.fire({
		title: title,
		text: text,
		icon: type,
		confirmButtonText: "okay",
	});
};

export default swalNotify;
