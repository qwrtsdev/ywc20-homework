import axios from "axios";

export async function GET() {
    try {
        const res = await axios.get(
            "https://api.ywc20.ywc.in.th/homework/candidates",
            {
                headers: {
                    "x-reference-id": "PG05",
                },
            }
        );

        console.log(res);

        return new Response(
            JSON.stringify(res.data),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "ไม่สามารถโหลดข้อมูลได้" }),
            {
                status: error.response?.status || 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}
