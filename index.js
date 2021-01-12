
var imageUrls   = ['url("images/1.jpg")','url("images/2.jpg")', 'url("images/3.jpg")', 'url("images/4.jpg")',
                     'url("images/5.jpg")', 'url("images/6.jpg")', 'url("images/7.jpg")', 'url("images/8.jpg")',
                     'url("images/9.jpg")','url("images/10.jpg")', 'url("images/11.jpg")', 'url("images/12.jpg")',
					 'url("images/13.jpg")', 'url("images/14.jpg")', 'url("images/15.jpg")', 'url("images/16.jpg")',
					 'url("images/17.jpg")', 'url("images/18.jpg")', 'url("images/19.jpg")', 'url("images/20.jpg")',
					 'url("images/21.jpg")','url("images/22.jpg")', 'url("images/23.jpg")', 'url("images/24.jpg")',
                     'url("images/25.jpg")', 'url("images/26.jpg")', 'url("images/27.jpg")', 'url("images/28.jpg")',
                     'url("images/29.jpg")','url("images/30.jpg")', 'url("images/31.jpg")', 'url("images/32.jpg")',
					 'url("images/33.jpg")', 'url("images/34.jpg")', 'url("images/35.jpg")', 'url("images/36.jpg")',
					 'url("images/37.jpg")', 'url("images/38.jpg")', 'url("images/39.jpg")', 'url("images/40.jpg")',
					 'url("images/41.jpg")','url("images/42.jpg")', 'url("images/43.jpg")', 'url("images/44.jpg")',
                     'url("images/45.jpg")', 'url("images/46.jpg")', 'url("images/47.jpg")', 'url("images/48.jpg")',
                     'url("images/49.jpg")','url("images/50.jpg")', 'url("images/51.jpg")', 'url("images/52.jpg")',
					 'url("images/53.jpg")', 'url("images/54.jpg")', 'url("images/55.jpg")', 'url("images/56.jpg")',
					 'url("images/57.jpg")', 'url("images/58.jpg")', 'url("images/59.jpg")', 'url("images/60.jpg")',
					 'url("images/61.jpg")','url("images/62.jpg")', 'url("images/63.jpg")', 'url("images/64.jpg")',
                     'url("images/65.jpg")', 'url("images/66.jpg")', 'url("images/67.jpg")', 'url("images/68.jpg")',
                     'url("images/69.jpg")','url("images/70.jpg")', 'url("images/71.jpg")', 'url("images/72.jpg")',
					 'url("images/73.jpg")', 'url("images/74.jpg")', 'url("images/75.jpg")', 'url("images/76.jpg")',
					 'url("images/77.jpg")', 'url("images/78.jpg")', 'url("images/79.jpg")', 'url("images/80.jpg")',
					 'url("images/81.jpg")','url("images/82.jpg")', 'url("images/83.jpg")', 'url("images/84.jpg")',
                     'url("images/85.jpg")', 'url("images/86.jpg")', 'url("images/87.jpg")', 'url("images/88.jpg")',
                     'url("images/89.jpg")','url("images/90.jpg")', 'url("images/91.jpg")', 'url("images/92.jpg")',
					 'url("images/93.jpg")', 'url("images/94.jpg")', 'url("images/95.jpg")', 'url("images/96.jpg")',
					 'url("images/97.jpg")', 'url("images/98.jpg")', 'url("images/99.jpg")', 'url("images/100.jpg")',
					 'url("images/101.jpg")','url("images/102.jpg")', 'url("images/103.jpg")', 'url("images/104.jpg")',
                     'url("images/105.jpg")', 'url("images/106.jpg")', 'url("images/107.jpg")', 'url("images/108.jpg")',                   
                     'url("images/109.jpg")','url("images/110.jpg")', 'url("images/111.jpg")', 'url("images/112.jpg")',
					 'url("images/113.jpg")', 'url("images/114.jpg")', 'url("images/115.jpg")', 'url("images/116.jpg")',
					 'url("images/117.jpg")', 'url("images/118.jpg")', 'url("images/119.jpg")', 'url("images/120.jpg")',
					 'url("images/121.jpg")','url("images/122.jpg")', 'url("images/123.jpg")', 'url("images/124.jpg")',
                     'url("images/125.jpg")', 'url("images/126.jpg")', 'url("images/127.jpg")', 'url("images/128.jpg")',                   
                     'url("images/129.jpg")','url("images/130.jpg")', 'url("images/131.jpg")', 'url("images/132.jpg")',
					 'url("images/133.jpg")', 'url("images/134.jpg")', 'url("images/135.jpg")', 'url("images/136.jpg")',
					 'url("images/137.jpg")', 'url("images/138.jpg")', 'url("images/139.jpg")', 'url("images/140.jpg")',
					 'url("images/141.jpg")','url("images/142.jpg")', 'url("images/143.jpg")', 'url("images/144.jpg")',
                     'url("images/145.jpg")', 'url("images/146.jpg")', 'url("images/147.jpg")', 'url("images/148.jpg")',                    
                     'url("images/149.jpg")','url("images/150.jpg")', 'url("images/151.jpg")', 'url("images/152.jpg")',
					 'url("images/153.jpg")', 'url("images/154.jpg")', 'url("images/155.jpg")', 'url("images/156.jpg")',
					 'url("images/157.jpg")', 'url("images/158.jpg")', 'url("images/159.jpg")', 'url("images/160.jpg")',
					 'url("images/161.jpg")','url("images/162.jpg")', 'url("images/163.jpg")', 'url("images/164.jpg")',
                     'url("images/165.jpg")', 'url("images/166.jpg")', 'url("images/167.jpg")', 'url("images/168.jpg")',                    
                     'url("images/169.jpg")','url("images/170.jpg")', 'url("images/171.jpg")', 'url("images/172.jpg")',
					 'url("images/173.jpg")', 'url("images/174.jpg")', 'url("images/175.jpg")', 'url("images/176.jpg")',
					 'url("images/177.jpg")', 'url("images/178.jpg")', 'url("images/179.jpg")', 'url("images/180.jpg")',
					 'url("images/181.jpg")','url("images/182.jpg")', 'url("images/183.jpg")', 'url("images/184.jpg")',
                     'url("images/185.jpg")', 'url("images/186.jpg")', 'url("images/187.jpg")', 'url("images/188.jpg")',                    
                     'url("images/189.jpg")','url("images/190.jpg")', 'url("images/191.jpg")', 'url("images/192.jpg")',
					 'url("images/193.jpg")', 'url("images/194.jpg")', 'url("images/195.jpg")', 'url("images/196.jpg")',
					 'url("images/197.jpg")', 'url("images/198.jpg")', 'url("images/199.jpg")', 'url("images/200.jpg")',
					 'url("images/201.jpg")','url("images/202.jpg")', 'url("images/203.jpg")', 'url("images/204.jpg")',
                     'url("images/205.jpg")', 'url("images/206.jpg")', 'url("images/207.jpg")', 'url("images/208.jpg")',                   
                     'url("images/209.jpg")','url("images/210.jpg")', 'url("images/211.jpg")', 'url("images/212.jpg")',
					 'url("images/213.jpg")', 'url("images/214.jpg")', 'url("images/215.jpg")', 'url("images/216.jpg")',
					 'url("images/217.jpg")', 'url("images/218.jpg")', 'url("images/219.jpg")', 'url("images/220.jpg")',
					 'url("images/221.jpg")','url("images/222.jpg")', 'url("images/223.jpg")', 'url("images/224.jpg")',
                     'url("images/225.jpg")', 'url("images/226.jpg")', 'url("images/227.jpg")', 'url("images/228.jpg")',                   
                     'url("images/229.jpg")','url("images/230.jpg")', 'url("images/231.jpg")', 'url("images/232.jpg")',
					 'url("images/233.jpg")', 'url("images/234.jpg")', 'url("images/235.jpg")', 'url("images/236.jpg")',
					 'url("images/237.jpg")', 'url("images/238.jpg")', 'url("images/239.jpg")', 'url("images/240.jpg")',
					 'url("images/241.jpg")','url("images/242.jpg")', 'url("images/243.jpg")', 'url("images/244.jpg")',
                     'url("images/245.jpg")', 'url("images/246.jpg")', 'url("images/247.jpg")', 'url("images/248.jpg")',                   
                     'url("images/249.jpg")','url("images/250.jpg")', 'url("images/251.jpg")', 'url("images/252.jpg")',
					 'url("images/253.jpg")', 'url("images/254.jpg")', 'url("images/255.jpg")', 'url("images/256.jpg")',
					 'url("images/257.jpg")', 'url("images/258.jpg")', 'url("images/259.jpg")', 'url("images/260.jpg")',
					 'url("images/261.jpg")', 'url("images/262.jpg")', 'url("images/263.jpg")', 'url("images/264.jpg")',
                     'url("images/265.jpg")', 'url("images/266.jpg")', 'url("images/267.jpg")', 'url("images/268.jpg")',
                     'url("images/269.jpg")', 'url("images/270.jpg")', 'url("images/271.jpg")', 'url("images/272.jpg")',
					 'url("images/273.jpg")', 'url("images/274.jpg")','url("images/275.jpg")', 'url("images/276.jpg")',
					 'url("images/277.jpg")', 'url("images/278.jpg")']




var imageNumber = imageUrls.length


function imagePop(id){


    document.getElementById('imagePopId').style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'

    var imageName = document.getElementById(id + '-image').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)
    
    document.getElementsByClassName('imageContain')[0].style.animation = 'he 800ms forwards'

    document.getElementsByClassName('imageContain')[0].style.backgroundImage = imageUrls[imageIndex]
}



function imageChange(id){

    var imageName = document.getElementById(id).style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++


    document.getElementById(id).style.backgroundImage = imageUrls[imageIndex]




}



function imageMoveLeft(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex <= 0)
    imageIndex = imageNumber - 1
    else
    imageIndex--


    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]




}



function imageMoveRight(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++


    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]




}




function imagePopNone(){

    document.getElementsByClassName('imagePop')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'

}