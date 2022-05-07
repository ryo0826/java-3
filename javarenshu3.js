(() => {

  class Accordion {
    constructor(obj){

      console.log("obj", obj.hookName)

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    clickHandler(e){
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if($content.style.display === "block"){
        $content.style.display = "none";
      }else{
        $content.style.display = "block";
      }
    }
    //const yahhoAccordion = new Accordion({
    //  hookName: "#js-faq",
  //    tagName: "p"
  //  });

  }

  const yahhoAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p"
  });

  const weyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a"
  });

//const $elm = document.querySelector("#js-accordion");
//const $trigger = $elm.getElementsByTagName("a");

//const triggerLen = $trigger.length;
//let index = 0;
//while (index < triggerLen) {
  //$trigger[index].addEventListener("click", (e) => clickHandler(e));
//  index++;
//}

//$trigger[0].addEventListener("click", (e) => clickHandler(e));

//const clickHandler = (e) => {
//  e.preventDefault();

//  const $target = e.currentTarget;
//  const $content = $target.nextElementSibling;

//  if($content.style.display === "block"){
//    $content.style.display = "none";
//  }else{
//    $content.style.display = "block";
//  }
//}

})();
