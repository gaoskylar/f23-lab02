package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Square;
import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        Shape circle = new Circle(3.0);
        Shape square = new Square(5);

        Renderer rendererRec = new Renderer(rectangle);
        Renderer rendererCir = new Renderer(circle);
        Renderer rendererSq = new Renderer(square);

        rendererRec.draw();
        rendererCir.draw();
        rendererSq.draw();
    }
}
