function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

// const baseUrl =
//   "https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/large/";
// const data = [];
// const fetch_pictures = () => {
//   for (let i = 1; i <= 199; i++) {
//     const fileNumber = i.toString().padStart(4, "0");
//     const fullUrl = `${baseUrl}${fileNumber}.jpg`;
//     data.push(fullUrl);
//   }
// };
// fetch_pictures();
// console.log(data);

function canvas() {
  const canvas = document.querySelector("#page2>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./assets/0000.jpg
    ./assets/0001.jpg
    ./assets/0002.jpg
    ./assets/0003.jpg
    ./assets/0004.jpg
    ./assets/0005.jpg
    ./assets/0006.jpg
    ./assets/0007.jpg
    ./assets/0008.jpg
    ./assets/0009.jpg
    ./assets/0010.jpg
    ./assets/0011.jpg
    ./assets/0012.jpg
    ./assets/0013.jpg
    ./assets/0014.jpg
    ./assets/0015.jpg
    ./assets/0016.jpg
    ./assets/0017.jpg
    ./assets/0018.jpg
    ./assets/0019.jpg
    ./assets/0020.jpg
    ./assets/0021.jpg
    ./assets/0022.jpg
    ./assets/0023.jpg
    ./assets/0024.jpg
    ./assets/0025.jpg
    ./assets/0026.jpg
    ./assets/0027.jpg
    ./assets/0028.jpg
    ./assets/0029.jpg
    ./assets/0030.jpg
    ./assets/0031.jpg
    ./assets/0032.jpg
    ./assets/0033.jpg
    ./assets/0034.jpg
    ./assets/0035.jpg
    ./assets/0036.jpg
    ./assets/0037.jpg
    ./assets/0038.jpg
    ./assets/0039.jpg
    ./assets/0040.jpg
    ./assets/0041.jpg
    ./assets/0042.jpg
    ./assets/0043.jpg
    ./assets/0044.jpg
    ./assets/0045.jpg
    ./assets/0046.jpg
    ./assets/0047.jpg
    ./assets/0048.jpg
    ./assets/0049.jpg
    ./assets/0050.jpg
    ./assets/0051.jpg
    ./assets/0052.jpg
    ./assets/0053.jpg
    ./assets/0054.jpg
    ./assets/0055.jpg
    ./assets/0056.jpg
    ./assets/0057.jpg
    ./assets/0058.jpg
    ./assets/0059.jpg
    ./assets/0060.jpg
    ./assets/0061.jpg
    ./assets/0062.jpg
    ./assets/0063.jpg
    ./assets/0064.jpg
    ./assets/0065.jpg
    ./assets/0066.jpg
    ./assets/0067.jpg
    ./assets/0068.jpg
    ./assets/0069.jpg
    ./assets/0070.jpg
    ./assets/0071.jpg
    ./assets/0072.jpg
    ./assets/0073.jpg
    ./assets/0074.jpg
    ./assets/0075.jpg
    ./assets/0076.jpg
    ./assets/0077.jpg
    ./assets/0078.jpg
    ./assets/0079.jpg
    ./assets/0080.jpg
    ./assets/0081.jpg
    ./assets/0082.jpg
    ./assets/0083.jpg
    ./assets/0084.jpg
    ./assets/0085.jpg
    ./assets/0086.jpg
    ./assets/0087.jpg
    ./assets/0088.jpg
    ./assets/0089.jpg
    ./assets/0090.jpg
    ./assets/0091.jpg
    ./assets/0092.jpg
    ./assets/0093.jpg
    ./assets/0094.jpg
    ./assets/0095.jpg
    ./assets/0096.jpg
    ./assets/0097.jpg
    ./assets/0098.jpg
    ./assets/0099.jpg
    ./assets/0100.jpg
    ./assets/0101.jpg
    ./assets/0102.jpg
    ./assets/0103.jpg
    ./assets/0104.jpg
    ./assets/0105.jpg
    ./assets/0106.jpg
    ./assets/0107.jpg
    ./assets/0108.jpg
    ./assets/0109.jpg
    ./assets/0110.jpg
    ./assets/0111.jpg
    ./assets/0112.jpg
    ./assets/0113.jpg
    ./assets/0114.jpg
    ./assets/0115.jpg
    ./assets/0116.jpg
    ./assets/0117.jpg
    ./assets/0118.jpg
    ./assets/0119.jpg
    ./assets/0120.jpg
    ./assets/0121.jpg
    ./assets/0122.jpg
    ./assets/0123.jpg
    ./assets/0124.jpg
    ./assets/0125.jpg
    ./assets/0126.jpg
    ./assets/0127.jpg
    ./assets/0128.jpg
    ./assets/0129.jpg
    ./assets/0130.jpg
    ./assets/0131.jpg
    ./assets/0132.jpg
    ./assets/0133.jpg
    ./assets/0134.jpg
    ./assets/0135.jpg
    ./assets/0136.jpg
    ./assets/0137.jpg
    ./assets/0138.jpg
    ./assets/0139.jpg
    ./assets/0140.jpg
    ./assets/0141.jpg
    ./assets/0142.jpg
    ./assets/0143.jpg
    ./assets/0144.jpg
    ./assets/0145.jpg
    ./assets/0146.jpg
    ./assets/0147.jpg
    ./assets/0148.jpg
    ./assets/0149.jpg
    ./assets/0150.jpg
    ./assets/0151.jpg
    ./assets/0152.jpg
    ./assets/0153.jpg
    ./assets/0154.jpg
    ./assets/0155.jpg
    ./assets/0156.jpg
    ./assets/0157.jpg
    ./assets/0158.jpg
    ./assets/0159.jpg
    ./assets/0160.jpg
    ./assets/0161.jpg
    ./assets/0162.jpg
    ./assets/0163.jpg
    ./assets/0164.jpg
    ./assets/0165.jpg
    ./assets/0166.jpg
    ./assets/0167.jpg
    ./assets/0168.jpg
    ./assets/0169.jpg
    ./assets/0170.jpg
    ./assets/0171.jpg
    ./assets/0172.jpg
    ./assets/0173.jpg
    ./assets/0174.jpg
    ./assets/0175.jpg
    ./assets/0176.jpg
    ./assets/0177.jpg
    ./assets/0178.jpg
    ./assets/0179.jpg
    ./assets/0180.jpg
    ./assets/0181.jpg
    ./assets/0182.jpg
    ./assets/0183.jpg
    ./assets/0184.jpg
    ./assets/0185.jpg
    ./assets/0186.jpg
    ./assets/0187.jpg
    ./assets/0188.jpg
    ./assets/0189.jpg
    ./assets/0190.jpg
    ./assets/0191.jpg
    ./assets/0192.jpg
    ./assets/0193.jpg
    ./assets/0194.jpg
    ./assets/0195.jpg
    ./assets/0196.jpg
    ./assets/0197.jpg
    ./assets/0198.jpg
    ./assets/0199.jpg
  `;
    return data.split("\n")[index];
  }

  const frameCount = 200;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page2`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page2",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}

canvas();
