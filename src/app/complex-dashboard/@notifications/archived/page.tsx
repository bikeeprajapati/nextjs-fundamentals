import { Card } from "@/src/components/card";
import  Link  from "next/link";
export default function ArchivedNotifications(){
    return( <Card>
        <div>Archived Notifications</div>
        <div>
            <Link href="/complex-dashboard">Back to Notifications</Link>
        </div>
        </Card>);
}