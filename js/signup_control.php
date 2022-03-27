<?php
	// 초기화
	include "00_conn.html";

	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$birthday = $_POST['birthday'];
	$email = $_POST['email'];
	$userpw = $_POST['userpw'];
	$phone = $_POST['phone'];
	$post = $_POST['post'];
	$add1 = $_POST['add1'];
	$add2 = $_POST['add2'];
	
	

	// 잘 넘어오는지 확인하기
	#echo "username:".$username."/ birthday:".$birthday."/ email:".$email."/ userpw:".$userpw."/ phone:".$phone."/ address:".$address."<br/>";
	
	//sql 구문 요청하기

	if(!empty($firstName) && !empty($lastName) && !empty($birthday) && !empty($email)  && !empty($userpw)  && !empty($phone) ){
		$sql = "INSERT INTO users2
		(firstName, lastName, birthday, email, userpw, phone, post, add1, add2)
		VALUES
		('$firstName', '$lastName', '$birthday', '$email', '$userpw', '$phone', '$post', '$add1', '$add2')";
		$result = mysqli_query($conn,$sql);
	}else{
		echo "<p>Please fill in again</p>";
	}
	
	if($result){
		echo "<script>alert('You successfully signed up!');</script>";
		echo "<meta http-equiv='Refresh' content='1; url=signin.html'>";
	}
?>