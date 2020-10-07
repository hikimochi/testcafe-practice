let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

ask(
    "Do U agree?",
    () => alert("You agred"),
    () => alert("No")
)