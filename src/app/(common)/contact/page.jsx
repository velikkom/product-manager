import { PageHeader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

const Page = async () => {
  await wait(3000);
  //throw new Error("Something went wrong");
  return (
    <div>
      <PageHeader title="Contact us" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim quis
        provident beatae culpa harum corrupti iure aliquam molestias neque natus
        sit maxime laudantium quaerat libero, quibusdam velit! Sapiente, ipsum?
        Odit doloremque laudantium vero. Placeat, doloribus. Debitis nihil
        dolore accusantium atque eius necessitatibus, nobis omnis natus tempora
        nemo aut. Et quae quis repudiandae architecto hic! Animi ex facilis
        delectus voluptatibus! Et sit, molestiae facilis cumque recusandae
        facere doloremque deleniti magni? Consequuntur adipisci ipsa, debitis
        doloribus explicabo molestias culpa ipsum quisquam architecto, illo,
        aspernatur est dignissimos. Pariatur non quos dolor itaque! Mollitia
        distinctio provident eos quidem nostrum quibusdam veritatis, possimus
        recusandae repudiandae ducimus, maiores enim laboriosam voluptate
        impedit eligendi veniam earum molestias. Odio aperiam exercitationem
        praesentium voluptas perspiciatis. Accusantium, facere nulla? Sint natus
        nostrum delectus totam amet ex consequatur, facere dicta? Omnis
        necessitatibus magnam, quibusdam obcaecati soluta, ut eum, sapiente
        porro beatae voluptatibus molestias? Ullam obcaecati a doloremque
        deleniti voluptas quidem?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, ut
        voluptate nobis eligendi ipsam mollitia odio laboriosam doloremque quis
        consectetur dolorem distinctio deserunt excepturi quia, perspiciatis
        repellat quae vel dolores. Debitis officiis aspernatur illo facilis
        necessitatibus eum perspiciatis impedit officia deserunt dolore
        exercitationem porro laudantium natus culpa veritatis, sapiente
        repudiandae omnis temporibus libero aut aliquam accusantium eius. Hic,
        et tenetur! Deserunt ex, illum at velit voluptatibus inventore. Cumque
        cum ratione molestiae consectetur. Alias inventore modi aliquam
        voluptate temporibus delectus sint veritatis iusto ex maiores ullam
        excepturi vero aspernatur, ea quidem? Dignissimos excepturi sed ipsum
        nobis consequuntur vel labore aut molestiae? Sed minus a, ducimus amet
        magnam atque perferendis hic laborum, illum tenetur porro reiciendis
        animi incidunt rerum quis facilis maxime? Vitae rerum assumenda pariatur
        officia asperiores recusandae exercitationem aliquam, deleniti, eum,
        laboriosam amet non cum laudantium dolorum beatae? Perferendis
        voluptates exercitationem numquam repellendus nostrum ipsa tenetur nisi
        inventore explicabo nobis?
      </p>
    </div>
  );
};

export default Page;
