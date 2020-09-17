import Swal from 'sweetalert2';

export const showLoading = function() {
	let timerInterval;
	Swal.fire({
		title: 'Please Wait',
		timer: 1000,
		timerProgressBar: true,
		onBeforeOpen: () => {
			Swal.showLoading();
			timerInterval = setInterval(() => {
				const content = Swal.getContent();
			}, 100);
		},
		onClose: () => {
			clearInterval(timerInterval);
		}
	}).then((result) => {
		/* Read more about handling dismissals below */
		if (result.dismiss === Swal.DismissReason.timer) {
			console.log('I was closed by the timer');
		}
	});
};
