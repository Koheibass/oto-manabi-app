import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

export default function Calender() {
    const eventExample = [
        {
            title: "オンラインコンサート（仮）",
            start: "2024-03-28",
            backgroundColor: "red",
            borderColor: "red"
        },
        {
            title: "質問LIVE",
            start: "2024-03-30",
            backgroundColor: "pink",
            borderColor: "pink"
        }
    ];
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                locale={jaLocale}
                initialEvents={[{ title: 'initial event', start: new Date() }]}
                events={eventExample}
            />
        </div>
    );
}
