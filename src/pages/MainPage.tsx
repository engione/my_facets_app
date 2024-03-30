import { Header } from "../components/Header/Header";
import ReviewsList from "../components/Reviews/ReviewsList";
import { Hero } from "../components/Hero/Hero";
import { Advantages } from "../components/Advantages/Advan";
import { FeedbackForm } from "../components/FeedbackForm/FeedbackForm";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Footer } from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";


export function MainPage() {

    const reviews = [
        {
            image: '../src/components/Reviews/avatar-test/4.png',
            name: 'Анна Б.',
            review: 'А ещё сделанные на базе интернет-аналитики выводы являются только методом политического участия и подвергнуты целой серии независимых исследований. Являясь всего лишь частью общей картины, действия представителей оппозиции неоднозначны и будут функционально разнесены на независимые элементы. В частности, укрепление и развитие внутренней структуры способствует подготовке и реализации новых принципов формирования материально-технической и кадровой базы. Следует отметить, что граница обучения кадров требует от нас анализа существующих финансовых и административных условий. Каждый из нас понимает очевидную вещь: высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке переосмысления внешнеэкономических политик.',
        },
        {
            image: '../src/components/Reviews/avatar-test/1.png',
            name: 'Иван В.',
            review: 'Внезапно, тщательные исследования конкурентов объективно рассмотрены соответствующими инстанциями. А также ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом — смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Банальные, но неопровержимые выводы, а также многие известные личности, вне зависимости от их уровня, должны быть подвергнуты целой серии независимых исследований. Идейные соображения высшего порядка, а также социально-экономическое развитие не оставляет шанса для существующих финансовых и административных условий. Лишь действия представителей оппозиции формируют глобальную экономическую сеть и при этом — ассоциативно распределены по отраслям.',
        },
        {
            image: '../src/components/Reviews/avatar-test/2.png',
            name: 'Максим Т.',
            review: 'Равным образом, начало повседневной работы по формированию позиции напрямую зависит от благоприятных перспектив. Господа, внедрение современных методик влечет за собой процесс внедрения и модернизации кластеризации усилий. В частности, современная методология разработки играет определяющее значение для прогресса профессионального сообщества. Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Кстати, диаграммы связей рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
        },
        {
            image: '../src/components/Reviews/avatar-test/3.png',
            name: 'Дмитрий А.',
            review: 'В рамках спецификации современных стандартов, тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть призваны к ответу. Значимость этих проблем настолько очевидна, что базовый вектор развития требует анализа новых предложений. В частности, высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке анализа существующих паттернов поведения. Банальные, но неопровержимые выводы, а также диаграммы связей, превозмогая сложившуюся непростую экономическую ситуацию, представлены в исключительно положительном свете. Разнообразный и богатый опыт говорит нам, что базовый вектор развития является качественно новой ступенью системы массового участия.',
        },
    ];

    return (
        <>
            <Header />
            <main>
                <Hero />
                <AboutUs />
                <Advantages />
                <ReviewsList reviews={reviews} />
                <FeedbackForm />
                <Footer />
            </main>
        </>
    );
}