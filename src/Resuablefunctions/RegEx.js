export function formatNums(num, sep, dec, u) {
    sep = sep || ",";
    u = u || "\\d";
    if (typeof num != "string") {
      num = String(num);
      if (dec && dec !== ".") num = num.replace(".", dec);
    }
    return num.replace(
      RegExp(
        "\\" +
          (dec || ".") +
          u +
          "+|" + 
          u +
          "(?=(?:" +
          u +
          "{3})+(?!" +
          u +
          "))",
        "g"
      ),
      function (a) {
        return a.length === 1 ? a + sep : a;
      }
    );
  }