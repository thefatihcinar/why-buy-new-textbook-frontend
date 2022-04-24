import React from 'react'
/* Material UI */
import Typography from "@mui/material/Typography";
import Image from 'material-ui-image'

const OurAims = () => {

    return (
        <div>
            <Typography variant="h4" color="primary" gutterBottom>
                Hedeflerimiz
            </Typography>
            <Image src={"./illustrations/aims/tree-cut-not-allowed.jpeg"} />
            <Typography variant="h5" color="primary" gutterBottom>
                Daha az ağaç kesimi.
            </Typography>
            <Typography variant="body1">
                "Neden Yeni Ders Kitabı Alasın Ki?" sayesinde alınan kitaplar farklı nesillerce kullanılacağı için çevreye zarar vermez.
            </Typography>
            <Image src={"./illustrations/aims/save-planet.jpeg"} />
            <Typography variant="h5" color="primary" gutterBottom>
                Çevreyi korumak.
            </Typography>
            <Typography variant="body1">
                "Why Buy New Textbook" yeni nesiller tekrardan ders notları, ders slaytları çıkarmak zorunda kalmazlar. Yeni kağıt israfı önlenmiş olur. Sürdürülebilir çevre amaçlanır.
            </Typography>
            <Image src={"./illustrations/aims/cheap-for-students.jpeg"} />
            <Typography variant="h5" color="primary" gutterBottom>
                Öğrenciler için bütçe dostu.
            </Typography>
            <Typography variant="body1">
                "Why Buy New Textbook" yeni nesiller çok uygun fiyata ders notlarından ve ders kitaplarından faydalabilirler. Kısıtlı bütçelerle harika sonuçlar.
            </Typography>
        </div>
    )
}

export default OurAims;
