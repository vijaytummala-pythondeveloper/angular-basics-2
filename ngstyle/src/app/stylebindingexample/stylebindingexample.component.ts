import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebindingexample',
  templateUrl: './stylebindingexample.component.html',
  styleUrls: ['./stylebindingexample.component.css']
})
export class StylebindingexampleComponent implements OnInit {
  course_id:number = 0
  course_name:string = ""
  course_content_java : string = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client-server web applications, with a reported 9 million developers.[21] "
  course_content_python :string = "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.[30]"
  course_content:string = ""
  course_color:string = ""

  constructor() { 
    this.course_id = Math.random()
    this.course_name = this.course_id > 0.5 ? "python":"java"
    this.course_content = this.course_name == "python" ? this.course_content_python : this.course_content_java
    this.course_color = this.course_name == "python"?"gray":"green"
  }

  ngOnInit(): void {
  }

}
