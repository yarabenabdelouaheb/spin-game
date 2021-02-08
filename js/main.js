
jQuery(document).ready(function($){
	
	
	$('.wheel-with-image').superWheel({
		slices: [
		{
			text: '',
			value: 1,
			message: "Happy BirthDay Bachir",
			background: "red",
			
		},
		{
			text: '',
			value: 1,
			message:"Happy BirthDay Bachir" ,
			background: "white",
			
		},
		{
			text: '',
			value: 1,
			message: "Happy BirthDay Bachir",
			background: "red",
			
		},
		{
			text: '',
			value: 1,
			message: "Happy BirthDay Bachir",
			background: "white",
			
		},
		{
			text: '',
			value: 1,
			message: "Happy BirthDay Bachir",
			background: "red",
			
		},
		{
			text: '',
			value: 1,
			message: "Happy BirthDay Bachir",
			background: "white",
			
		}
	],
	text : {
		type: 'image',
		color: 'Happy BirthDay Bachir',
		size: 25,
		offset : 10,
		orientation: 'h'
		
	},
	line: {
		width: 10,
		color: "#78909C"
	},

	inner: {
		width: 15,
		color: "black"
	},
	marker: {
		background: "red",
		animate: 1
	},
	
	selector: "value",
	
	
	
	});
	
	
	
	var tick = new Audio('media/tick.mp3');
	
	$(document).on('click','.wheel-with-image-spin-button',function(e){
		
		$('.wheel-with-image').superWheel('start','value',1);
		$(this).prop('disabled',true);
	});
	
	
	$('.wheel-with-image').superWheel('onStart',function(results){
		
		
		$('.wheel-with-image-spin-button').text('Spinning...');
		
	});
	$('.wheel-with-image').superWheel('onStep',function(results){
		
		if (typeof tick.currentTime !== 'undefined')
			tick.currentTime = 0;
        
		tick.play();
		
	});
	
	
	$('.wheel-with-image').superWheel('onComplete',function(results){
			if(results.value === 1){
			
			swal({
				type: 'success',
				title: "WaW!", 
				html: results.message
			});
			
		}else{
			swal("Oops!", results.message, "error");
		}
		
		
		$('.wheel-with-image-spin-button:disabled').prop('disabled',false).text('Spin');
	
		
	});
	
	
	
		$("#btn").click(function(){
	     location.href="../index1.html"
         })
	
});