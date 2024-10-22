<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>My website </title>
	<link href="css/html-layout-styles.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css">
	<link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css">
	<link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css">
	<link rel="stylesheet" href="https://unpkg.com/css.gg@2.0.0/icons/css/chevron-double-down.css">
</head>
	
<body>
	<header>	
		<div class="top_header">
				<a onclick="document.getElementById('page-home').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;">HOME</a>
				<hr class="hr1">
				<a onclick="document.getElementById('page-about').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;">ABOUT</a>
				<hr class="hr2">
				<a href="https://sites.google.com/view/11111114s/%E9%A6%96%E9%A0%81?authuser=1">BLOG</a>
		</div>
	</header>
	<nav>
		<div class="logo"></div>
		<ul id="quick-link" class="quick-link">
			<li class="nav-link active" data-menuanchor="page-home">
				<a onclick="document.getElementById('page-home').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;"><i class="fi fi-rs-user"></i></a>
			</li>
			<li class="nav-link" data-menuanchor="page-about">
				<a onclick="document.getElementById('page-about').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;"><i class="fi fi-rr-code-simple"></i></a>
			</li>
			<li class="nav-link" data-menuanchor="page-blog">
				<a onclick="document.getElementById('page-blog').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;"><i class="fi fi-rr-terminal"></i></a>
			</li>
			<li class="nav-link" data-menuanchor="page-contact">
				<a onclick="document.getElementById('page-contact').scrollIntoView({behavior: 'smooth'})" style="cursor: pointer;"><i class="fi fi-rr-envelope"></i></a>
			</li>
		</ul>
	</nav>
	<div class="page-cover">
		<video autoplay="autoplay" loop="loop" muted="muted" style="height: 1152px;width: 2048px;margin-top: -61px;margin-left: 0px;">
			<source src="video/steam open.webm">
			<source src="video/Samy Younsi - Security Researcher.mp4">
		</video>
	</div>

	
	<main>
		<div class="mainpagecontent">
			<div class="pane-name">
			  <div class="content">
					<h1 class="name">Cheng Kai Yang</h1>
					<div>
						<h2 class="my-title"> Student 
							<br>NTTU CSIE
						</h2>
						<div class="sub-title">
						</div>
							<span style="background:#43CD0C; position: relative;">0x416e6420612067616d657221</span>
						</div>
					</div>
				 
			</div>
			<div class="mainpage">
				<div class="page-home" id="page-home" data-anchor="home">
					<div class="fp-tablecell">
						<section class="content" style="background-color: rgb(0 0 0 / 30%)">
							<p>
							<?php include("php/get-index-meta-data.php");?>
							<hr />
							<?php include('php/get-cpu-load.php');?>
							</p>
						</section>
					</div>
				</div>
				<div class="page-about" id="page-about" data-anchor="about-me">
					<div class="fp-tablecell">
						<section class="content" style="background-color: rgb(0 0 0 / 30%)">
							<h3 class="title">about me</h3>
							<article class="text">
								<div class="sub-title" style="background:#27ae60;left: 0px;"></div>
								<span class="p-sub_title">"Everything comes from interest"</span>
								<br>
								<br>
								<br>
								<p>Passionate about computer science since my youth, it keep growing over the years transforming this passion into my life.</p>
								<br>
								<p>I am a student, gamer, novice photographer, amateur coder, and philosopher of the soul. Currently still in the learning process, I fantasize about releasing a Souls-like game. Additionally, I am researching Chat GPT-related customer service chatbots for website frontend integration.</p>
								<br>
								<p>When I'm not writing codes that break codes, you'll find me taking photos on the streets or engaging in card battles of a game called Weiβ Schwarz. And when boredom strikes, I hop onto Steam to play games, extracting inspiration for my creations and relaxing my mind, body, and soul.</p>
							</article>
						</section>
						
					</div>
				</div>
				<div class="page-blog" id="page-blog" data-anchor="blog">
					<div class="fp-tablecell">
						<section class="content" style="background-color: rgb(0 0 0 / 30%)">
							<h3 class="title">my blog</h3>
							<article class="text" style="display: flex; justify-content: space-between; align-items: center;">
								<!-- 左邊文字區塊 -->
								<div class="text-content" style="flex: 1; padding-left: 20px;">
									<div class="sub-title" style="background:#27ae60; left: 0px;"></div>
									<span class="p-sub_title">"LATEST POST"</span>
									<br><br><p>快，不僅僅是超越極限</p><br>
									<p>BMW M3 GT2 攝於 Nürburgring</p>
								</div>
								<!-- 右邊圖片區塊 -->
								<div class="image-content" style="flex: 1; text-align: left;">
									<a href="https://sites.google.com/view/11111114s/%E4%BD%9C%E5%93%81%E6%AC%A3%E8%B3%9E?authuser=1">
										<img src="img/Screenshot_bmw_m3_gt2_ks_nurburgring_29-8-124-23-19-31.jpg" style="width: auto; height: auto; max-width: 90%; margin: 0 auto;">
									</a>
								</div>
							</article>
						</section>
					</div>
				</div>
				<div class="page-contact" id="page-contact" data-anchor="contact">
					<div class="fp-tablecell">
						<section class="content" style="background-color: rgb(0 0 0 / 30%)">
							<h3 class="title">keep in touch</h3>
							<article class="text" style="display: flex; justify-content: space-between; align-items: center;">
    							<!-- 左邊文字區塊 -->
								<div class="text-content" style="flex: 1; padding-left: 20px;">
									<b>E-MAIL</b>
									<p>fk8663212@gmail.com</p>
									<br>
									<b>Github</b>
									<p>fk8663212</p>
									<br>
									<audio controls src="music/2016.mp3"></audio>
									<br>
								</div>
								<!-- 右邊圖片區塊 -->
								<div class="image-content" style="flex: 1; text-align: center;">
									<img src="img/PXL_20231031_025700286.PORTRAIT.jpg" style="width: auto; height: auto; max-width: 50%; margin: 0 auto;">
								</div>
							</article>

						</section>
					</div>
				</div>

			</div>
		</div>
		<footer class="p-scrolldown">
			<div class="arrow-d" bis_skin_checked="1">
				<div style="position: relative;right: 20px; font-size: 18px">Scroll</div>
				<div class="mouse">
					<i class="gg-chevron-double-down"></i>
				</div>
				<div style="position: relative; left: 20px; font-size: 18px">Down</div>
			</div>
		</footer>
	</main>
	
	
	
	
	
	
	<footer class="page-footer">
		
		<div class="footer-social">
			<a href="#"><i class="fi fi-brands-instagram"></i>
			</a>
			<a href="#"><i class="fi fi-brands-facebook"></i>
			</a>
			<a href="#">
				<i class="fi fi-brands-twitter"></i>
			</a>
			<a href="#">
				<i class="fi fi-brands-discord"></i>
			</a>
			<a href="https://github.com/fk8663212">
				<i class="fi fi-brands-github"></i>
			</a>
			<a href="https://www.youtube.com/channel/UCYhzWQuWljSr5Ohzese5IXQ">
				<i class="fi fi-brands-youtube"></i>
			</a>
		</div>
	</footer>
	
	<!-- script -->
	<script src="script/scroll.js" type="text/javascript">
	</script>
	
	
	
</body>	
</html>
