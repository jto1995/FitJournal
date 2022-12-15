export default function ErrorMessage ({display}) {
    if(display === true) {
        return(
            <p className="text-red-600 flex justify-center text-xl">
                Please fill out the form!
            </p>
        )
    }
}