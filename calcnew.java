public class calcnew extends Calculator{

    public int newadd(int a, int b, int c, int d) {
        return add(add(a, b), add(c, d));
    }
    public static void main(String[] args) {
        calcnew hi = new calcnew(); 
        System.out.println(hi.newadd(1, 2, 3, 4));
    

    }
}
