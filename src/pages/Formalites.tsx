import Layout from "@/components/Layout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Formalites = () => {
  return (
    <Layout>
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Formalités</h1>

          <div className="space-y-8">
            {/* Formalité 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Acquisition d'un bien immobilier par un étranger</h2>
              <p className="text-gray-700">
                Les étrangers peuvent acquérir des biens immobiliers au Togo sous certaines conditions. Il est recommandé de consulter un notaire pour connaître les démarches spécifiques.
              </p>
            </div>

            {/* Formalité 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Taxes et impôts liés à l'immobilier</h2>
              <p className="text-gray-700">
                Plusieurs taxes et impôts sont liés à l'immobilier au Togo, notamment la taxe foncière et les droits d'enregistrement. Il est important de se renseigner sur les taux en vigueur.
              </p>
            </div>

            {/* Formalité 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Contrat de bail : ce qu'il faut savoir</h2>
              <p className="text-gray-700">
                Le contrat de bail est un document essentiel pour la location d'un bien immobilier. Il doit préciser les droits et obligations du locataire et du propriétaire.
              </p>
            </div>

            {/* Formalité 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Les diagnostics immobiliers obligatoires</h2>
              <p className="text-gray-700">
                Certains diagnostics immobiliers sont obligatoires lors de la vente ou de la location d'un bien, notamment le diagnostic de performance énergétique (DPE).
              </p>
            </div>

            {/* Formalité 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Assurances immobilières : lesquelles choisir ?</h2>
              <p className="text-gray-700">
                Plusieurs types d'assurances immobilières existent, notamment l'assurance habitation et l'assurance responsabilité civile. Il est important de choisir les assurances adaptées à votre situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Formalites;
