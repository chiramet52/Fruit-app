document.addEventListener("DOMContentLoaded", function () {
  const btnToday = document.getElementById("btnToday");
  const btnChoose = document.getElementById("btnChoose");
  const dateChooser = document.getElementById("dateChooser");
  const pageHome = document.getElementById("page-home");
  const pageCalc = document.getElementById("page-calc");

  function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  }

  btnToday.addEventListener("click", () => {
    showPage("page-calc");
    // เพิ่มฟังก์ชันโหลดตารางวันนี้ได้ที่นี่
  });

  btnChoose.addEventListener("click", () => {
    dateChooser.classList.remove("hidden");
  });

  dateChooser.addEventListener("change", () => {
    if (dateChooser.value) {
      showPage("page-calc");
      // เพิ่มฟังก์ชันโหลดตารางของวันที่เลือกได้ที่นี่
    }
  });
});