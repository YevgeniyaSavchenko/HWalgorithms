
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        /*Формула НОД: НОД (a, b) = НОД (b, с), где с — остаток от деления a на b.

1 Большее число поделить на меньшее.
2 Меньшее число поделить на остаток, который получается после деления.
3 Первый остаток поделить на второй остаток.
4 Второй остаток поделить на третий и т. д.
5 Деление продолжается до тех пор, пока в остатке не получится нуль.
 Последний делитель и есть наибольший общий делитель.
*/
        Scanner scanner = new Scanner(System.in);

        int x = scanner.nextInt();
        int y = scanner.nextInt();

        long start = System.nanoTime();
        System.out.println(gcd(x,y));

        public static int gcd ( int x, int y){
            int a = Math.max(x, y);
            int b = Math.min(x, y);

            while (b != 0) {
                int c = a % b;
                a = b;
                b = c;
            }
            System.out.println(a);
        }
    }
}

